import axios from 'axios';

const state = () => ({
    list: [],
    info: "",
  });
  
  const mutations = {
    setList(state, param) {
      state.list = param;
    },
    setInfo(state, param) {
      state.info = param;
    },
  };

  const actions = {
    fetchList(store) {
      axios
        .get(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=a4dc3c1560384b0fa4f341b8ad2be55e`)
        .then((response) => {
          store.commit("setList", response.data.results);
          store.commit("setInfo", "");
        })
        .catch((error) => {
          store.commit("setInfo", error);
        });
    },
    fetchMore(store) {
      axios
        .get(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=a4dc3c1560384b0fa4f341b8ad2be55e`, {
          params: {
            limit: 5,
            offset: store.state.list.length,
          },
        })
        .then((response) => {
          store.commit("setList", [
            ...store.state.list,
            ...response.data.results,
          ]);
          store.commit("setInfo", "");
        })
        .catch((error) => {
          store.commit("setInfo", error);
        });
    },
  };
  
  export default {
    state,
    mutations,
    actions,
  };