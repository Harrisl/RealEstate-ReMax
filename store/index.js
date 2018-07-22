import Vue from 'vue'
import Vuex from 'vuex'
import menu from './menu'
import tbmenu from './tbmenu'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      pageTitle: 'Home',
      menu: menu,
      tbmenu: tbmenu,
      user: {
        id: 'adwadaadwwad',
        shortlist: 'wadawdawda',
      },
      houseInfos: [
        {
          id: 'eafafafafaad', 
          title: 'A new townhouse in Mandeville', 
          url: 'https://media.onthemarket.com/properties/2247975/img_0_1_hd.jpg', 
          type: 'Sale',
          bathrooms: '3.5',
          bedrooms: '3',
          squarefeet: '2000',
          price: '1200000',
          location: 'Mandeville, Manchester, Jamaica'
        },
        {
          id: 'rgsvrgsadsgf', 
          title: 'Erie Lakeside house', 
          url: 'http://www.hotelroomsearch.net/im/hotels/gb/lake-house-18.jpg', 
          type: 'Rent',
          bathrooms: '4',
          bedrooms: '5',
          squarefeet: '2000',
          price: '2700000',
          location: 'Spalding, Clarendon, Jamaica'
        },
        {
          id: 'zdbdrsbdfbdz', 
          title: 'Cottage with a big pool', 
          url: 'https://images.alphacoders.com/435/thumb-1920-435117.jpg', 
          type: 'Sale',
          bathrooms: '4',
          bedrooms: '4',
          squarefeet: '1900',
          price: '2000000',
          location: 'Falmouth, Trelawny, Jamaica'
        },
        {
          id: 'mnmpwseigere', 
          title: 'A beach house in Montego Bay', 
          url: 'https://i.pinimg.com/originals/0f/cd/a1/0fcda132623c84920fa603636ac5f502.jpg', 
          type: 'Rent',
          bathrooms: '6',
          bedrooms: '7',
          squarefeet: '3000',
          price: '4000000',
          location: 'MontegoBay, St.James, Jamaica'
        }
      ],
          parish: [
          {id: 'St.Mary'              },
          {id: 'St.James'            },
          {id:  'St.Catherine'    },
          {id: 'St.Ann'                },
          {id:  'St.Elizabeth'    },
          {id:  'St.Thomas'          },
          {id:  'St.Andrew'          },
          {id: 'Clarendon'         },
          {id:  'PortLand'           },
          {id: 'Hanover'             },
          {id: 'Westmoreland'   },
          {id: 'Manchester'       }, 
          {id:  'Trelawny'           },   
          {id:  'Kingston'           },   
          ],
    },

    mutations: {
      setMenu (state, data) {
        state.menu = data
      },
      setTbMenu (state, data) {
        state.tbmenu = data
      },
      setPageTitle (state, data) {
        state.pageTitle = data
      },
    },

    actions: {
      checkPageTitle ({commit, state}, path) {
        for (let k in state.menu) {
          if (state.menu[k].to === path) {
            commit('setPageTitle', state.menu[k].title)
            break
          }
        }
      }
    },
    
    getters: {
      houseInfos (state) {
        return state.houseInfos.sort((houseA, houseB) => {
          return houseA.title > houseB.title
        })
      },
      featuredHouses (state, getters) {
        return getters.houseInfos.slice(0,2)
      },
      houseInfo (state) {
        return (houseID) => {
          return state.houseInfos.find((house) => {
            return house.id === houseID
          })
        }
      },
      parishesSort (state) {
        return state.parish.sort((parishA, parishB) => {
            return parishA.id > parishB.id
          })
        },
      parishes (state) {
        return (parishname) => {
        return state.parish.find((parish) => {
          return parish.id === parishname
          })
        }
      },
    }
  })
}