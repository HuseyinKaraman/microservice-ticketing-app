import axios from 'axios';

const LandingPage = ({currentUser}) => {
    return (
        <div>
            <h1>Home - {currentUser && "You are signed in"}</h1>
        </div>
    )
}

LandingPage.getInitialProps = async ({req}) => {
    if (typeof window === 'undefined') {
        const {data} = await axios.get('http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',{
            headers: req.headers
        }).catch((err) => {
            console.log('error', err.response.data);
        });
        return data;
    } else {
        // We are on the browser
        const {data} = await axios.get('/api/users/currentuser');
        return data;
    }
}

export default LandingPage;