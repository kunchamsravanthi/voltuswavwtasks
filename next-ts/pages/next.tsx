// import { NextPage } from 'next';

// const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
//   <h1> Hello world! - user agent: {userAgent}</h1>
// )

// Home.getInitialProps = async ({ req }) => {
//   const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
//   return { userAgent };
// };

// export default Home;
export const config = { amp: true };

export default function Index(props) {
  return <p>Welcome to the AMP only Index page!!</p>;
}