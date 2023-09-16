let step;
    let currentUnit;
    let player;
    let elements = [];
    let sources = [];
    let map = document.getElementById("map");
    /**
     * 1 - камень
     * 2 - дерево
     * 3 - источник золота
     * 4 - строение
     * 5 - юнит
     * x v, y-> (при отображении координаты меняются местами: y v, x->)
    **/ 
    let grid = [ 
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [1, 3, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 1], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ];

    class Building {
        fraktion;
        element;
        x;
        y;
        width;
        height;
        hp;
        defence;
        
        constructor(fraktion, element, x, y, width, height, hp, defence) {
            this.fraktion = fraktion;
            this.element = element;
            this.width = width;
            this.height = height;
            this.hp = hp;
            this.defence = defence;
            this.element.style.width = step * width + "px";
            this.element.style.height = step * height + "px";
            console.log("Размещение здания", x, y);
            this.element.style.left = x * step + "px";
            this.element.style.top = (y - this.height + 1) * step + "px";
            this.x = x * step;
            this.y = y * step;
        }
    }

    class Unit {
        fraktion;
        element;
        hpBar;
        x;
        y;
        width;
        height;
        moveOrder;
        attakOrder;
        maxHp;
        hp;
        attak;
        attakSpeed;
        defence;
        speed;
        range;

        constructor(fraktion, element, hpBar, x, y, width, height, hp, attak, attakSpeed, defence, speed, range) {
            this.fraktion = fraktion;
            this.element = element;
            this.hpBar = hpBar;
            this.width = width;
            this.height = height;
            this.maxHp = hp;
            this.hp = hp;
            this.attak = attak;
            this.attakSpeed = attakSpeed;
            this.defence = defence;
            this.speed = speed;
            this.range = range;
            this.element.style.width = step * width + "px";
            this.element.style.height = step * height + "px";
            
            this.hpBar.style.width = width * step;

            for (let i = x; i < x + width && i < grid.length; i++) {
                for (let j = y; j > y - height && j >= 0; j--) {
                    grid[i][j] = 5; //код юнита
                }
            }
            this.element.style.left = x * step + "px";
            this.element.style.top = (y - this.height + 1) * step + "px";
            this.x = x;
            this.y = y;
        }

        //все места где используется фнукция должны обрабатывать ситуацию колизии с подвижным объектом
        move(x, y) {
            console.log(x, y);
            if (hasCollision(this, x, y)) {
                console.log("Возникла коллизия");
            } else {
                for (let i = this.x; i < this.x + this.width && i < grid.length; i++) {
                    for (let j = this.y; j > this.y - this.height && j >= 0; j--) {
                        grid[i][j] = 0;
                    }
                } 
                for (let i = x; i < x + this.width && i < grid.length; i++) {
                    for (let j = y; j > y - this.height && j >= 0; j--) {
                        grid[i][j] = 5; //код юнита
                    }
                }
                this.element.style.left = x * step + "px";
                this.element.style.top = (y - this.height + 1) * step + "px";
                this.x = x;
                this.y = y;
            }
        }

       select() {
            currentUnit = this;
        }

        getAttaсk() {
            return this.attak;
        }

        getAttakSpeed() {
            return this.attakSpeed;
        }

        getId() {
            return this.element.id;
        }

        getWidth() {
            return this.width;
        }
        getHeight() {
            return this.height;
        }

        getX() {
            return this.x;
        }

        getY() {
            return this.y;
        }

        setMoveOrder(order) {
            this.moveOrder = order;
        }

        getMoveOrder() {
            return this.moveOrder;
        }

        setAttakOrder(order) {
            this.attakOrder = order;
        }

        getAttakOrder() {
            return this.attakOrder;
        }

        path = undefined;
        // target - наследник unit или building
        attack(target) {
            this.stop();
            if (!(target instanceof Unit || target instanceof Building)) {
                console.log('Атака на неатакуемый объект ' + target);
                return;
            }
            if (this.fraktion === target.fraktion) {
                console.log('Атака на своих ' + target);
                return;       
            }
            if (target.hp <= 0) {
                return;
            }

            if (inAttakRange(this, target, this.getX(), this.getY())) {
                target.getDamage(this.getAttaсk());
                this.setAttakOrder(setTimeout(() => this.attack(target), 1000 / this.getAttakSpeed()));
            } else {
                //инициализация
                if (this.path == undefined) {
                    this.path = findCloserFreeFieldPatch(this, target);
                }

                let nextNode = this.path[this.path.length - 1];

                /* пересчитывать путь если из точки назначения больше нельзя атаковать цель
                 * или наши координаты изменились не на один шаг из path
                 * или если на пути возникло препятствие. 
                 */
                if (!inAttakRange(this, target, this.path[0].x, this.path[0].y) 
                        || nextNode.x !== this.getX()
                        || nextNode.y !== this.getY() 
                        || hasCollision(this, nextNode.x, nextNode.y)) {
                    console.log("Перерасчет пути до цели");
                    this.path = findCloserFreeFieldPatch(this, target);
                }
                if (this.path == null) {
                    console.log('Нет пути к атакуемой цели' + target);
                    return;   
                } else if (target.hp > 0) {
                    //делаем один шажек к цели и запускаем функцию рекурсивно
                    this.move(this.path[this.path.length - 2].x, this.path[this.path.length - 2].y);
                    //чтобы не стоять на месте
                    this.path.pop();
                    setTimeout(() => this.attack(target), 1000 / this.speed);
                }
            }
        }

        getDamage(damage) {
            console.log("[DAMAGE] " + this + " " + this.hp);

            const reductionFactor = Math.tanh(this.defence / 20);

            this.hp -= damage * (1 - reductionFactor);

            this.hpBar.style.width = Math.round((this.width * step) * this.hp / this.maxHp) + "px";
            if (this.hp <= 0) {
                this.dead();
            }
        }

        stop() {
            clearTimeout(this.getAttakOrder());
            clearTimeout(this.getMoveOrder());
        }

        dead() {
            this.stop();
            console.log("DEAD!", this);
        
            const startX = this.getX();
            const startY = this.getY();
            const endX = startX + this.width;
            const endY = startY - this.height;

            for (var i = 0; i < grid.length; i++) {
                console.log(JSON.stringify(grid[i]));
            }

            for (let x = startX; x < endX && x < grid.length; x++) {
                for (let y = startY; y < endY && y < grid[0].length; y--) {
                    grid[x][y] = 0;
                }
            }

            const index = elements.indexOf(this);
            if (index !== -1) {
                elements.splice(index, 1);
            }

            this.element.remove();

            delete this;
        }
}

    class Ork extends Unit {
        name = "Ork Warier";
        constructor(x, y, fraktion) {
            let ork = document.createElement("div");
            ork.className = "unit orkWarier";
            ork.addEventListener('contextmenu', rightClickToAttak);
            ork.id = elements.length;
            
            let hpBar = document.createElement("div");
            hpBar.className = "hpBar";
            ork.append(hpBar);
            
            map.append(ork);

            super(
            fraktion, // фракция
            ork, // элемент
            hpBar,
            x, // координата X
            y, // координата Y
            1, // ширина
            2, // высота
            100, // очки здоровья
            10, // атака
            10, // скорость атаки
            5, // защита
            10, // скорость
            2 // радиус
            );
            elements.push(this);

        }
    }

    class OrkWorker extends Unit {
        name = "Ork Worker";
        mineVol = 10;
        goldInBag = 0;
        woodInBag = 0;
        maxBagVol = 100;

        constructor(x, y, fraktion) {
            let ork = document.createElement("div");
            ork.className = "unit orkWorker";
            ork.addEventListener('contextmenu', rightClickToAttak);
            ork.id = elements.length;

            let hpBar = document.createElement("div");
            hpBar.className = "hpBar";
            ork.append(hpBar);

            map.append(ork);
            super(
            fraktion, // фракция
            ork, // элемент
            hpBar,
            x, // координата X
            y, // координата Y
            1, // ширина
            1, // высота
            100, // очки здоровья
            10, // атака
            10, // скорость атаки
            1, // защита
            30, // скорость
            2 // радиус
            );
            elements.push(this);
        }

        mine (source) {
            this.stop();
            if (!(source instanceof Tree || source instanceof Field) || source.resource <= 0) {
                return;                   
            }
            if (goldInBag + woodInBag >= maxBagVol) {
                this.take();
            }
            if (inAttakRange(this, source, this.getX(), this.getY())) {
                if (source instanceof Tree) {
                    woodInBag += source.give(mineVol);
                } else if (source instanceof Field) {
                    goldInBag += source.give(mineVol);
                }
                this.setAttakOrder(setTimeout(() => this.mine(source), 1000));
            } else {
                let path = findCloserFreeFieldPatch(this, source);
                if (path != null) {
                    move(this, path);
                    //Если будет заметно тупить - расписать метод mine
                    this.setAttakOrder(setTimeout(() => this.mine(source), 500));
                } else {
                    return;
                }
            }
        }

        take() {
            //реализовать поход к главному зданию и отбратно
            this.fraktion.addGold(goldInBag);
            goldInBag = 0;
            this.fraktion.addWood(woodInBag);
            woodInBag = 0;
        }
    }

    class Source {
        x;
        y;
        resource;
        element; 
        width;
        height;

        constructor(x, y, element, resource, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.resource = resource;
            element.addEventListener('contextmenu', rightClickToMine);
        }

        give(vol) {
            if (this.resource > vol) {
                this.resource -= vol; 
                return vol;
            } else {
                this.deplet();
                return this.resource;
            }
        }

        deplet() {
            console.log("DEPLIT!", this);

            const startX = this.x;
            const startY = this.y;
            const endX = startX + this.width;
            const endY = startY - this.height;

            for (let x = startX; x < endX && x < grid.length; x++) {
                for (let y = startY; y < endY && y < grid[0].length; y--) {
                    grid[x][y] = 0;
                }
            }

            const index = sources.indexOf(this);
            if (index !== -1) {
                sources.splice(index, 1);
            }

            this.element.remove();

            delete this;
        }
    }

    //может быть не стоит считать источником
    class Stone extends Source {
        constructor(x, y) {
            let stone = document.createElement("div");

            super(x, y, stone, Infinity, 1, 1);

            stone.className = "source stone";
            stone.id = sources.length;
            sources.push(this);
            stone.style.width = step - 1 + 'px';
            stone.style.height = step - 1 + 'px';
            grid[x][y] = 1;
            map.append(stone);

            stone.style.left = x * step + "px";
            stone.style.top = y * step + "px";
        } 
    }

    class Tree extends Source {
        //принимает координаты корная дерева
        constructor(x, y) {
            let tree = document.createElement("div");

            super(x, y, tree, 110, 1, 2);

            tree.className = "source tree";
            tree.id = sources.length;
            sources.push(this);

            //может стоит сразу на 2 клетки
            grid[x][y] = 2; //код дерева

            //выставляются размеры 1 на 2
            tree.style.width = 2 * step - 1 + 'px';
            tree.style.height = 2 * step - 1 + 'px';


            tree.style.left = x * step + "px";
            tree.style.top = (y - 1) * step + "px";
            map.append(tree);
        }
    }

    class Field extends Source {
        constructor(x, y) {
            let field = document.createElement("div");

            super(x, y, field, 5000, 1, 1);

            field.className = "source field";
            field.id = sources.length;
            sources.push(this);

            grid[x][y] = 3; //код шахты

            field.style.width = step - 1 + 'px';
            field.style.height = 1 * step - 1 + 'px';
            field.style.left = x * step + "px";
            field.style.top = y * step + "px";
            map.append(field);
        }
    }

    class Fraktion {
        name;
        collor;
        gold;
        wood;
        constructor(name, collor) {
            this.gold = 0;
            this.wood = 0;
            this.name = name;
            this.collor = collor;
        }

        addWood(count) {
            if (Number.isInteger(count)) {
                this.wood += count;
                //возможно обновить счетчик
            } else {
                console.log("ошибка в addWood " + name);
            }
        }

        addGold(count) {
             if (Number.isInteger(count)) {
                this.gold += count;
                //возможно обновить счетчик
            } else {
                console.log("ошибка в addWood " + name);
            }
        }
    }

    class Node {
        x;
        y;
        previous;
        cost;
        engaged;

        constructor(x, y, engaged) {
            this.x = x;
            this.y = y;
            this.cost = Infinity;
            this.engaged = engaged;
        }

        isEngaged() {
            return this.engaged != 0;
        }
    }

    class Pair {
        first;
        second;

        constructor(f, s) {
            this.first = f;
            this.second = s;
        }
    }


    initiation();
    
    function initiation() {
        // Создаем игрока с фракцией "player" и цветом "red"
        player = new Fraktion("player", "red");
        
        // Создаем противника с фракцией "enemy" и цветом "blue"
        enemy = new Fraktion("enemy", "blue")

        // Отображаем топ панель
        displyOnTopPanel(player);
        
        // Добавляем обработчик события click на карту
        map.addEventListener("click", mapHendler);
        
        // Создаем ячейки
        makeChells();
        
        // Заполняем карту
        fillMap();
        
        // Скрываем ячейки
        hideChells();
        
        let u1 = new Ork(4, 4, player);
        let u2 = new OrkWorker(3, 3, player);
        let u3 = new Ork(6, 14, enemy);

        let s1 = new Stone(1, 1);
    }

    /*unit - юнит, которого нужно переместить
      path - массив клеток, которые он должен последовательно пройти
    * */
    function move(unit, path) {
        console.log("Перемещение: [" + path[path.length - 1].x + ", " + path[path.length - 1].y 
        + "] ... [" + path[0].x + ", " + path[0].y + "], id = " + unit.getId());
        unit.stop();
        unit.setMoveOrder(setTimeout(function tick(i) {
            if (i < path.length) {
                if (hasCollision(unit, path[path.length - 1 - i].x, path[path.length - 1 - i].y)) {
                    let newPath = find_path(unit, path[0].x, path[0].y);
                    unit.setMoveOrder(setTimeout(move, 1000 / unit.speed, unit, newPath));
                } else {
                    unit.move(path[path.length - 1 - i].x, path[path.length - 1 - i].y);
                    i++;
                    unit.setMoveOrder(setTimeout(tick, 1000 / unit.speed, i));
                }
            }
        }, 1000 / unit.speed, 1));
    }

    function displyOnTopPanel(fraktion) {
        let goldElem = document.getElementById('gold');
        let woodElem = document.getElementById('wood');
        let nameElem = document.getElementById('PlayerName');
        nameElem.innerHTML = fraktion.name;
        goldElem.innerHTML = fraktion.gold;
        woodElem.innerHTML = fraktion.wood;
    }

    function displyOnTable(unit) {
        let nameElem = document.getElementById('name');
        let hpElem = document.getElementById('hp');
        let attakElem = document.getElementById("attak");
        let defElem = document.getElementById('def');
        let speedElem = document.getElementById('speed');

        nameElem.innerHTML = unit.name;
        hpElem.innerHTML = unit.hp;
        attakElem.innerHTML = unit.attak;
        defElem.innerHTML = unit.defence;
        speedElem.innerHTML= unit.speed;
    }

    function find_path(unit, x, y) {
        let Ax = unit.getX();
        let Ay = unit.getY();
        let chells = [];

        /* Эта часть нужна, чтобы по массиву чисел представляющим из себя карту
         * построить массив нод, которые более удобны для поиска пути. Так как 
         * значения в надоах меняются в процессе работы алогоритма, я решил 
         * создавать их массив каждый раз заново, конечно, лучше было бы не 
         * создавать каждфый раз, а, допусим, подчищать измененя, но в данном случае,
         * я решил не парится */
        for (i = 0; i < grid.length; i++) {
            chells[i] = [];
        }
        for (i = 0; i < grid.length; i++) {
            for (j = 0; j < grid[i].length; j++) {
                chells[i][j] = new Node(i, j, grid[i][j]);
            }
        }
        
        chells[Ax][Ay].cost = 1;
        let reachable = [chells[Ax][Ay]];
        let explored = [];

        while (reachable.length != 0) {
            let node = choseNode(reachable);
            if (node == chells[x][y]) {
                return buildPath(node);
            } 

            let nodeIndex = (node, array) => {
                for (i = 0; i < array.length; i++) {
                    if (array[i] == node) {
                        return i;
                    }
                }
                return -1;
            };

            reachable.splice(nodeIndex(node, reachable), 1);
            explored.push(node);

            let getAdjacentNodes = node => {
                let adjacent = [];
                for (let i = -1; i < 2; i++) {
                    for (let j = -1; j < 2; j++) {
                        if (i != 0 || j != 0) {
                            if (!hasCollision(unit, node.x + i, node.y - j) 
                                && explored.indexOf(chells[node.x + i][node.y - j]) == -1
                                        && chells[node.x + i][node.y + j] != node) {
                                adjacent.push(chells[node.x + i][node.y - j]);
                            }
                        }
                    }
                }
                return adjacent;
            };

            let newReachtable = getAdjacentNodes(node);
            for (i = 0; i < newReachtable.length; i++) {
                if (reachable.indexOf(newReachtable[i]) == -1) {
                    reachable.push(newReachtable[i]);
                }
                if (node.cost + 1 < newReachtable[i].cost) {
                    newReachtable[i].previous = node;
                    if (newReachtable[i].x != node.x && newReachtable[i].y != node.y) {
                        newReachtable[i].cost = node.cost + 1.5;
                    }
                    else {
                        newReachtable[i].cost = node.cost + 1.0;
                    }
                }
            }
        }
        return null;
        function choseNode(reachable) {
            let bestNode = null;
            for (i = 0; i < reachable.length; i++) {
                if (bestNode == null || bestNode.cost > reachable[i].cost) {
                    bestNode = reachable[i];
                }   
            }
            return bestNode;
        }

        //Наверное, стоило так и оставить связный список, но когда я это писал, массивы мне казались удобнее
        function buildPath(node) {
            let path = [node];
            let prev = node.previous;
            while (prev != undefined) {
                path.push(prev);
                prev = prev.previous;
            }
            return path;
        }
    }

    function mapHendler(event) {
        let target = event.target;
        console.log(target);
        if (target.matches(".unit")) {
            for (i = 0; i < elements.length; i++) {
            if (target == elements[i].element) {
                    elements[i].select();
                    displyOnTable(elements[i]);
                }
            }
        } else {
            let x = parseInt(event.pageX / step);
            let y = parseInt((event.pageY - parseInt(window.getComputedStyle(map).top)) / step);
            move(currentUnit, find_path(currentUnit, x, y));
        }
    }
    
    function rightClickToAttak(event) {
        event.preventDefault(); // Предотвращает показывание стандартного контекстного меню
        let target;
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].element === event.target) {
                target = elements[i];
            }
        }
        if (currentUnit !== undefined) {
            currentUnit.attack(target);
        }
    }

    function rightClickToMine(event) {
        if (!currentUnit instanceof OrkWorker) {
            return;
        }
        
        event.preventDefault();
        let target;
        for (let i = 0; i < sources.length; i++) {
            //не находит цель
            if (sources[i].element === event.target) {
                target = sources[i];
                console.log(target);
            }
        }
        if (currentUnit !== undefined) {
            currentUnit.mine(target);
        }
    }

    function makeChells() {
        let res = (grid.length / grid[0].length);

        let canvs = document.getElementById("chells");
        canvs.style.top = "0px";
        canvs.style.left = "0px";
        let ctx = canvs.getContext("2d");

        let w = Math.min(window.innerWidth, window.innerHeight - parseInt(window.getComputedStyle(window.map).top) * 1.05) * res;
        let h = Math.min(window.innerWidth, window.innerHeight - parseInt(window.getComputedStyle(window.map).top) * 1.05);
 
        step = Math.sqrt((w * h) / (grid.length * grid[0].length)) - 0.1 * res;
        

        canvs.width = w - 0.6 * res; 
        canvs.height = h - 0.6 * res;

        ctx.strokeStyle = "lightgray";

        for (let i = 0; i < canvs.width; i += step) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, canvs.height);
            ctx.stroke();
        } 

        for (let i = 0; i < canvs.height; i += step) {
            ctx.beginPath();
            ctx.moveTo(0, i);
            ctx.lineTo(canvs.width, i);
            ctx.stroke();
        }

        hideButton = document.getElementById("hideChells");
        hideButton.addEventListener("click", hideChells);
    }

    function hideChells() {
        let chells = document.getElementById("chells");
        let hideButton = document.getElementById("hideChells");
        /*for (var i = 0; i < grid.length; i++) {
            console.log(JSON.stringify(grid[i]));
        }*/
        if (chells.style.visibility != 'hidden') {
            chells.style.visibility = 'hidden';
            hideButton.innerHTML = "показать сетку";
        } else {
            chells.style.visibility = 'visible';
            hideButton.innerHTML = "скрыть сетку";
        }
    }

    /* Сообщает, возникнут ли колизии если юнита unit переместить на координаты x y
     * return: true если колизии возникнут, false если нет */
     function hasCollision(unit, x, y) {
        const gridWidth = grid.length;
        const gridHeight = grid[0].length;

        for (let i = x; i < x + unit.width; i++) {
            for (let j = y; j > y - unit.height; j--) {
                if (i >= 0 && i < gridWidth && j >= 0 && j < gridHeight) {
                    if (i >= unit.getX() && i < unit.getX() + unit.width && 
                            j <= unit.getY() && j > unit.getY() - unit.height) {
                        if (grid[i][j] != 0 && grid[i][j] != 5) {
                            return true;
                        }
                    } else if (grid[i][j] != 0) {  
                        return true;
                    }
                } else {
                    // координаты вне grid
                    return true;
                }
            }
        }    
        return false;        
    }

    function isCellFree(x, y, grid) {
        return grid[x][y] === 0;
    }

    /* Находит путь от unit до ближайшей свободной клетки с которой unit сможет атаковать target с учетом размеров unit и target 
     * Лучше было бы сделать поиском в ширину, но я решил в данном случае сделать тупой перебор  
    */
    function findCloserFreeFieldPatch(unit, target) {
        // Находим границы прямоугольника, в котором юнит сможет атаковать цель
        const startX = Math.max(target.getX() - unit.range - (unit.width - 1), 0);
        const endX = Math.min(target.getX() + unit.range + (target.width - 1), grid.length);
        const startY = Math.max(target.getY() - unit.range - (target.height - 1), 0);
        const endY = Math.min(target.getY() + unit.range + (unit.height - 1), grid[0].length);

        let closestX = null;
        let closestY = null;
        let minDistance = Infinity;

        for (let x = startX; x <= endX; x++) {
            for (let y = startY; y <= endY; y++) {
                if (
                    x >= target.getX() - unit.range - (target.width - 1) &&
                    y >= target.getY() - unit.range - (target.height - 1) &&
                    x <= target.getX() + unit.range + (target.width - 1) &&
                    y <= target.getY() + unit.range + (unit.height - 1)
                ) {
                    const distance = Math.abs(unit.getX() - x) + Math.abs(unit.getY() - y);
                    if (distance < minDistance && isCellFree(x, y, grid)) {
                    closestX = x;
                    closestY = y;
                    minDistance = distance;
                    }
                }
            }
        }
        return closestX !== null && closestY !== null ? find_path(unit, closestX, closestY) : null;
    }

    /* находит и возвращает юлижайшее к [x, у] место, где можно разместить
     * юнита с такими размерами возвращает {x1, y1} 
     */
    function findPlaceForPacment(x, y, width, height) {
        //реализовать поиск в ширину первой клетки в которой будет возможность размещения
    }

    //проверяет, может ли unit атаковать target из точки x y
    function inAttakRange(unit, target, x, y) {
        if (x >= target.getX() - unit.range - (unit.width - 1) &&
                y >= target.getY() - unit.range - (target.height - 1) &&
                    x <= target.getX() + unit.range + (target.width - 1) &&
                        y <= target.getY() + unit.range + (unit.height - 1)) {
            return true;
        } else {
            return false;
        }
    }
    
    function fillMap() {
        for (x = 0; x < grid.length; x++) {
            for (var y = 0; y < grid[x].length; y++) {
                if (grid[x][y] == 1) {
                    let b = new Stone(x, y);
                } else if (grid[x][y] == 2) {
                    let t = new Tree(x, y);
                } else if (grid[x][y] == 3) {
                    let f = new Field(x, y);
                }
            } 
        }
    }
