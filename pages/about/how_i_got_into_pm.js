import Layout from "/components/Layout";
import Head from "next/head";

export default function About() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>How I Got Into PM - Ben Echols</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <p>I got really lucky, several times.</p>

          <p>
            My senior year of college, all I wanted to do was keep going to
            Williams. I wasn't excited about - or even really thinking about - a
            career. Now, when undergrads contact me asking what working in
            product is like, I'm happily amazed at how much more capable and
            mature they are than I ever was.{" "}
          </p>

          <p>
            I went to law school because the career counseling office didn't
            have much else to recommend to a philosophy major. When I got to law
            school, I missed my college friends, and I never got engaged with
            the material or new classmates.{" "}
          </p>

          <p>
            I dropped out of law school and went to work for Forrester Research,
            mostly because few college friends worked there, and Forrester would
            hire people fresh out of college who weren't sure what else to do. I
            learned about customer research, data analysis, writing, business
            processes, and the tech industry, without really intending to. This
            was extremely lucky!
          </p>

          <p>
            It was at Forrester where I learned about the role of product
            management and started thinking about pursuing it. I moved to an
            internal team doing a mix of training and internal product
            management for Forrester's research and consulting practices, just
            to get some semblance of relevant experience. I also moved to San
            Francisco while still working for Forrester. Most companies wouldn't
            have been so accommodating. This was extremely lucky!
          </p>

          <p>
            When I started looking in earnest for software product management
            jobs in SF, I talked to a family friend who was a technical
            recruiter. She delivered the tough news that I wasn't likely to find
            a PM role, because I didn't have a comp sci background or an MBA.
            She recommended I timebox my search and be ready with backup plans.{" "}
          </p>

          <p>
            A week later, I happened to have lunch with a high school friend
            visiting from out of town. Her boyfriend lived in SF, was a product
            manager at a company hiring entry level product managers, and he was
            willing to refer me. This was extremely lucky!
          </p>

          <p>
            My resume was pretty light, so I'd put my LSAT score on it. The
            hiring manager happened to be dating an attorney, so - unlike nearly
            everyone - he happened to know what a pretty good LSAT score was,
            and figured he'd give me an interview despite my lack of directly
            relevant experience or skills. This was extremely lucky!
          </p>

          <p>
            I did well enough in my interviews to get the job, and I've loved
            being a PM ever since.
          </p>
        </main>
      </div>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Layout>
  );
}
