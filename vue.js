new Vue ({
    el: "#firstSection",
    data: {
        newMenuItem: 'Pizza',
        lunchMenu: ['Nasi Lemak','Mi Goreng', 'Prata', 'Hor Fun']
    },
    methods: {
        addMenuItem: function(){
            this.lunchMenu.push(this.newMenuItem);
        }

    }
})

