import { createStore } from 'vuex';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import "vue3-toastify/dist/index.css";
import router from '@/router';
import { applyToken } from '@/service/AuthenticatedUser.js';
import { useCookies } from 'vue3-cookies';
const { cookies } = useCookies();
const apiURL = 'https://electroqueiro.onrender.com/';
console.log(cookies.get('LegitUser')?.token);

applyToken(cookies.get('LegitUser')?.token)
export default createStore({
  state: {
    users: null,
    user: null,
    products: [],
    recentProducts: null,
    product: null,
    userRole: null,
    isAuthenticated: !!localStorage.getItem('token'),
    token: localStorage.getItem('token') || '',
    cart: JSON.parse(cookies.get('cart')) || [],
    cartItemCount: 0
  },
  getters: {
    cartTotal: (state) => {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
    },
    cartItemCount: (state) => {
      return state.cart.reduce((count, item) => count + item.quantity, 0)
    },
    getUsers: state => state.users,
    products: state => state.products
  },
  mutations: {
    setUsers(state, value) {
      state.users = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    setProducts(state, value) {
      state.products = value;
    },
    setRecentProducts(state, value) {
      state.recentProducts = value;
    },
    setProduct(state, value) {
      state.product = value;
    },
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    clearToken(state) {
      state.token = '';
      localStorage.removeItem('token');
    },
    addToCart(state, product) {
      const existingProduct = state.cart.find(item => item.prodID === product.prodID);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
        cookies.set('cart', JSON.stringify(state.cart));
        state.cartItemCount = this.getters.cartItemCount;  // Update count
      }
    },
    removeFromCart(state, productId) {
      const index = state.cart.findIndex(item => item.prodID === productId);
      if (index !== -1) {
        state.cart.splice(index, 1);
        cookies.set('cart', JSON.stringify(state.cart));
        state.cartItemCount = this.getters.cartItemCount;  // Update count
      }
    },
    updateCartItemQuantity(state, { productId, quantity }) {
      const item = state.cart.find(item => item.prodID === productId);
      if (item) {
        item.quantity = quantity;
        cookies.set('cart', JSON.stringify(state.cart));
        state.cartItemCount = this.getters.cartItemCount;  // Update count
      }
    },
    clearCart(state) {
      state.cart = [];
      state.cartItemCount = 0;  // Reset cartCount
    },

    setUserRole(state, value) {
      state.userRole = value;
    }
  },
  actions: {
    initialize({ commit }) {
      const token = localStorage.getItem('token');
      const user = cookies.get('LegitUser')?.user;

      if (token) {
        commit('setToken', token);
        if (user) {
          commit('setUser', user);
          commit('setUserRole', user.userRole);
        }
      }
    },

    async fetchProducts({ commit }) {
      try {
        const { data } = await axios.get(`${apiURL}product`);
        const { results } = data;
        if (results) {
          commit('setProducts', results);
        } else {
          router.push({ name: 'login' });
        }
      } catch (error) {
        console.error('Fetch products error:', error);
        toast.error(error.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },

    async fetchUser({ commit }, userId) {
      try {
        const { data } = await axios.get(`${apiURL}users/${userId}`);
        commit('setUser', data.results);
      } catch (error) {
        console.error('Failed to fetch user:', error);
        toast.error(`Failed to fetch user: ${error.message}`, { autoClose: 2000 });
      }
    },

    async register({ dispatch, commit }, payload) {
      try {
        const { data } = await axios.post(`${apiURL}users/register`, payload);
        const { msg, err, token } = data;
        if (token) {
          dispatch('fetchUsers');
          toast.success(msg, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
          commit('setToken', token);
          cookies.set('LegitUser', { token, msg });
          applyToken(token);
        } else {
          toast.error(err, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (error) {
        console.error('Registration error:', error);
        toast.error(error.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },

    async updateUser({ dispatch }, payload) {
      try {
        const { data } = await axios.patch(`${apiURL}users/${payload.id}`, payload.data);
        const { msg, err } = data;
        if (msg) {
          dispatch('fetchUsers');
          toast.success(msg, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          });
        } else {
          toast.error(err, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      } catch (error) {
        console.error('Update user error:', error);
        toast.error(error.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
      }
    },

    async deleteUser({ dispatch }, id) {
      try {
        const { data } = await axios.delete(`${apiURL}users/${id}`);
        const { msg } = data;
        if (msg) {
          dispatch('fetchUsers');
          toast.success(msg, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      } catch (error) {
        console.error('Delete user error:', error);
        toast.error(`Unable to delete user: ${error.response?.data?.message || error.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
      }
    },

    async login({ commit }, payload) {
      try {
        const { err, user, token } = await (await axios.post(`${apiURL}users/login`, payload)).data;
        if (user) {
          commit('setUser', user);
          commit('setToken', token);
          commit('setUserRole', user.userRole);
          applyToken(token);
          cookies.set('LegitUser', { token, user });
          router.push(user.userRole === 'Admin' ? { name: 'admin' } : { name: 'home' });
        } else {
          toast.error(`${err}`, { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER });
        }
      } catch (e) {
        toast.error('Login failed. Please try again.', { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER });
      }
    },

    logout({ commit }) {
      commit('clearToken');
      commit('setUser', null);
      cookies.remove('LegitUser');
      applyToken(null);
      router.push('/');
    },

    async recentProducts({ commit }) {
      try {
        const { data } = await axios.get(`${apiURL}product/recent`);
        const { results, msg } = data;
        if (results) {
          commit('setRecentProducts', results);
        } else {
          toast.error(msg, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (error) {
        console.error('Recent products error:', error);
        toast.error(error.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },

    async fetchProduct({ commit }, id) {
      try {
        const { data } = await axios.get(`${apiURL}product/${id}`);
        const { result, msg } = data;
        if (result) {
          commit('setProduct', result);
        } else {
          toast.error(msg, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (error) {
        console.error('Fetch product error:', error);
        toast.error(error.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },

    async addProduct({ dispatch }, payload) {
      try {
        const { data } = await axios.post(`${apiURL}products/add`, payload);
        const { msg } = data;
        if (msg) {
          dispatch('fetchProducts');
          toast.success(msg, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (error) {
        console.error('Add product error:', error);
        toast.error(error.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },

    async updateProduct({ dispatch }, payload) {
      try {
        const { data } = await axios.patch(`${apiURL}products/${payload.prodID}`, payload);
        const { msg, err } = data;
        if (msg) {
          dispatch('fetchProducts');
          toast.success(msg, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        } else {
          toast.error(err, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (error) {
        console.error('Update product error:', error);
        toast.error(error.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },

    async deleteProduct({ dispatch }, id) {
      try {
        const { data } = await axios.delete(`${apiURL}products/${id}`);
        const { msg } = data;
        if (msg) {
          dispatch('fetchProducts');
          toast.success(msg, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (error) {
        console.error('Delete product error:', error);
        toast.error('Unable to delete a product', {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    addToCart({ commit }, product) {
      commit('addToCart', product);
    },
    removeFromCart({ commit }, productId) {
      commit('removeFromCart', productId);
    },
    updateCartItemQuantity({ commit }, payload) {
      commit('updateCartItemQuantity', payload);
    }
  },
  modules: {},
});