// Istruzioni:
// Ricreare lo slider di immagini ma questa volta con Vue
let app = new Vue ({
  el: '#root',
  data: {
    images: [
      'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',
      'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
      'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
      'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg'
    ],
    counter : 0,
  },
  created : function (){
    setInterval (this.nextImg, 3000)
  },
  methods: {
    nextImg(){
      this.counter++;
      if (this.counter > this.images.length - 1) {
        this.counter = 0;
      }
    },
    prevImg(){
      this.counter--;
      if (this.counter < 0) {
        this.counter = this.images.length - 1;
      }
    }
  }
});

