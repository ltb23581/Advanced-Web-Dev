new Vue({
    el: '#app',

    data() {
        return {
            info: null,
            moreData: [],
            whichDawg: "",
            selector: 0
        };
    },

    mounted() {
        this.showme('cocker');
    },

    methods: {
        async showme(index) {
            const response = await axios.get('https://dog.ceo/api/breed/spaniel/' + index + '/images');
            this.info = response.data;
            this.moreData = this.info.message;
            this.selector = 0; 
            this.slider(); 
        },

        /* TODO: 
        * Modify the slider function so that your slideshows can move in either direction. You can do this with arguments (challenging) or simply by adding another function (easy, but unsatisfying).
        * Make sure that the selector variable never becomes too large or too small (less than 0 or greater than the length of an array) to load an image when it is clicked.
        */

        slider() {
            if (this.moreData.length > 0) {
                this.whichDawg = this.moreData[this.selector];
                this.selector++;

                if (this.selector >= this.moreData.length) {
                    this.selector = 0;
                }
            }
        }
    }
});


