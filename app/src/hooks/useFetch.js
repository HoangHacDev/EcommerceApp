/* eslint-disable prettier/prettier */

// const api_url = 'https://api.thecatapi.com/v1/images/search?limit=10&page=1';

const fetchCats = () => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=1')
        .then(res => res.json())
        .then(resJson => {
            this.setState({ data: resJson });
            this.setState({ refreshing: false });
        }).catch(e => console.log(e));
};

export default fetchCats;
