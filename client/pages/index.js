
const LandingPage = ({ currentUser }) => {
  return (
      <h1>{currentUser ? "You are signed in" : "You are not signed in"}</h1>
  );
};

LandingPage.getInitialProps = async (context) => {
  console.log("LANDING PAGE");
  return {};
};

export default LandingPage;
