import { Button, Container, Heading, Link, VStack } from "@chakra-ui/react";

const axios = require(`axios`); // using Axios instead of native fetch or swr or something because Goodreads returns XML
var parseString = require("xml2js").parseString;

function BookButton({ title, author, link }) {
  return (
    <Button as={Link} href={link} size="sm" variant="ghost" isExternal>
      {title}
      {" by "}
      {author}
    </Button>
  );
}

export default function Books({ currentlyReading, recentlyRead }) {
  return (
    <Container>
      <Heading>Currently Reading</Heading>
      {currentlyReading &&
        currentlyReading.map(({ book }, index) => {
          if (book.title) {
            return (
              <BookButton
                title={book.title}
                author={book.author}
                link={book.link}
                key={index}
              />
            );
          }
          return null;
        })}
      <Heading>Recently Read</Heading>
      {recentlyRead &&
        recentlyRead.map(({ book }, index) => {
          if (book.title) {
            return (
              <BookButton
                title={book.title}
                author={book.author}
                link={book.link}
                key={index}
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
      // TODO handle error
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
      // TODO handle error
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
