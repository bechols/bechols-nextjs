import {
  Box,
  Container,
  Heading,
  Link,
  Image,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const axios = require(`axios`); // using Axios instead of native fetch or swr or something because Goodreads returns XML
var parseString = require("xml2js").parseString;

function BookCard({ title, author, link, imagelink, body, rating }) {
  const bg = useColorModeValue("williamsGold", "williamsPurple");

  return (
    <Container
      p={5}
      my={5}
      shadow="md"
      borderWidth="1px"
      _hover={{
        bg: bg,
      }}
    >
      <Link href={link} isExternal _hover={"none"}>
        <HStack justifyContent="space-between">
          <Container>
            <Heading size="md">{title}</Heading>
            <Text>{author}</Text>
            {rating && body && (
              <Box pt="5">
                <HStack>
                  <Heading size="xs">My review:</Heading>
                  <Text>{rating + " stars"}</Text>
                </HStack>
                <Text>{body}</Text>
              </Box>
            )}
          </Container>
          {!imagelink.includes("nophoto") && (
            <Image src={imagelink} alt={"Cover of " + title} />
          )}
        </HStack>
      </Link>
    </Container>
  );
}

export default function Books({ currentlyReading, recentlyRead }) {
  return (
    <Container>
      <Heading size="lg">Books</Heading>
      {currentlyReading && <Heading size="md">Currently Reading</Heading>}
      {currentlyReading &&
        currentlyReading.map(({ book }, index) => {
          if (book.title) {
            return (
              <BookCard
                title={book.title}
                author={book.author}
                link={book.link}
                key={index}
                imagelink={book.smallImageUrl}
              />
            );
          }
          return null;
        })}
      {recentlyRead && <Heading size="md">Recently Read</Heading>}
      {recentlyRead &&
        recentlyRead.map((review, index) => {
          if (review.book.title) {
            return (
              <BookCard
                title={review.book.title}
                author={review.book.author}
                link={review.book.link}
                key={index}
                imagelink={review.book.smallImageUrl}
                rating={review.rating}
                body={review.body}
              />
            );
          }
          return null;
        })}
    </Container>
  );
}

export async function getStaticProps() {
  const currentOptions = {
    method: `get`,
    url: `https://www.goodreads.com/review/list`,
    params: {
      id: process.env.GOODREADS_USER,
      shelf: `currently-reading`,
      v: 2,
      key: process.env.GOODREADS_KEY,
      per_page: 5,
      page: 1,
      sort: `date_read`,
    },
  };
  const currentShelfListXml = await axios(currentOptions);
  var currentlyReading;
  parseString(currentShelfListXml.data, function (err, result) {
    if (err) {
      return;
    } else {
      if (
        Object.keys(result["GoodreadsResponse"]["reviews"][0]["review"] || {})
          .length === 0
      ) {
        return; // TODO: handle empty response
      }
      currentlyReading = result["GoodreadsResponse"]["reviews"][0][
        "review"
      ].map((element) => {
        var bookElement = element["book"][0];

        var isbnValue = bookElement["isbn"][0];
        var isbn13Value = bookElement["isbn13"][0];
        if (isNaN(isbnValue)) {
          isbnValue = null;
        }
        if (isNaN(isbn13Value)) {
          isbn13Value = null;
        }

        return {
          reviewID: element["id"][0],
          rating: element["rating"][0],
          dateStarted: element["started_at"][0],
          dateAdded: element["date_added"][0],
          dateUpdated: element["date_updated"][0],
          body: element["body"][0],
          book: {
            bookID: bookElement["id"][0]._,
            isbn: isbnValue,
            isbn13: isbn13Value,
            author: bookElement["authors"][0]["author"][0]["name"],
            textReviewsCount: bookElement["text_reviews_count"][0]._,
            uri: bookElement["uri"][0],
            link: bookElement["link"][0],
            title: bookElement["title"][0],
            titleWithoutSeries: bookElement["title_without_series"][0],
            imageUrl: bookElement["image_url"][0],
            smallImageUrl: bookElement["small_image_url"][0],
            largeImageUrl: bookElement["large_image_url"][0],
            description: bookElement["description"][0],
          },
        };
      });
    }
  });

  var recentlyRead = null;
  const recentOptions = {
    method: `get`,
    url: `https://www.goodreads.com/review/list`,
    params: {
      id: process.env.GOODREADS_USER,
      shelf: `read`,
      v: `2`,
      key: process.env.GOODREADS_KEY,
      per_page: 5,
      page: 1,
      sort: `date_read`,
    },
  };

  const recentShelfListXml = await axios(recentOptions);

  parseString(recentShelfListXml.data, function (err, result) {
    if (err) {
      return;
    } else {
      if (
        Object.keys(result["GoodreadsResponse"]["reviews"][0]["review"] || {})
          .length === 0
      ) {
        return; // TODO: handle empty response
      }
      recentlyRead = result["GoodreadsResponse"]["reviews"][0]["review"].map(
        (element) => {
          var bookElement = element["book"][0];

          var isbnValue = bookElement["isbn"][0];
          var isbn13Value = bookElement["isbn13"][0];
          if (isNaN(isbnValue)) {
            isbnValue = null;
          }
          if (isNaN(isbn13Value)) {
            isbn13Value = null;
          }

          return {
            reviewID: element["id"][0],
            rating: element["rating"][0],
            dateStarted: element["started_at"][0],
            dateAdded: element["date_added"][0],
            dateUpdated: element["date_updated"][0],
            body: element["body"][0],
            book: {
              bookID: bookElement["id"][0]._,
              isbn: isbnValue,
              isbn13: isbn13Value,
              author: bookElement["authors"][0]["author"][0]["name"],
              textReviewsCount: bookElement["text_reviews_count"][0]._,
              uri: bookElement["uri"][0],
              link: bookElement["link"][0],
              title: bookElement["title"][0],
              titleWithoutSeries: bookElement["title_without_series"][0],
              imageUrl: bookElement["image_url"][0],
              smallImageUrl: bookElement["small_image_url"][0],
              largeImageUrl: bookElement["large_image_url"][0],
              description: bookElement["description"][0],
            },
          };
        }
      );
    }
  });

  // At build time, passes data to page
  return {
    props: {
      currentlyReading,
      recentlyRead,
    },
  };
}
