'use strict'

/*Напишите класс Vec, который представляет вектор в двумерном пространстве.
Вектор принимает параметры х и у (числа) и сохраняет их в свойствах
с тем же именем.*/

/*class Vec {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}*/

	/*Напишите для прототипа Vec два метода, plus и minus, которые принимают
в качестве параметра другой вектор и возвращают новый вектор, представляющий
собой сумму или разность значений х и у для двух векторов (this
и параметра).*/

	/*plus(other){
		return new Vec(this.x + other.x, this.y + other.y);
	}

	minus(other){
		return new Vec(this.x - other.x, this.y - other.y);
	}*/

	// Добавьте в прототип свойство-геттер length, которое вычисляет длину
// вектора - расстояние от точки (х, у) до начала координат (О, О).

	/*get length() {
		return Math.sqrt(this.x * this.x + this.y * this.y); 
	}
};*/

/*Напишите класс с именем Group (поскольку имя Set уже занято). Как и Set,
он располагает методами add, delete и has. Его конструктор создает пустую
группу, add добавляет в нее значение (но только если такого значения там
еще нет), метод delete удаляет свой аргумент из группы (если таковой там
был), а has возвращает логическое значение, указывающее, является ли его
аргумент членом группы.*/

/*class Group {
	constructor() {
		this.members = [];
	}

	add(value) {
		if (!this.has(value)) {
			this.members.push(value);
		}
	}

	delete(value) {
		this.members = this.members.filter(v => v !== value);
	}

	has(value) {
		return this.members.includes(value);
	}

// Присвойте классу статический метод from, который принимает в качестве
// аргумента итерируемый объект и создает группу, содержащую все значения,
// полученные посредством перебора.

    static from(collection) {
    	let group = new Group;
    	for (let value of collection) {
    		group.add(value);
    	}
    	return
    }
}
*/

/*Сделайте класс Group из предыдущего упражнения итерируемым. Если вы
не помните точный вид интерфейса итератора, перечитайте раздел, посвященный
этому интерфейсу, ранее в данной главе.
Если для представления членов группы вы использовали массив, не возвращайте
просто итератор, созданный путем вызова метода Symbol. i terator для
массива. Это бы сработало, но оно не соответствует цели данного упражнения.

Если ваш итератор ведет себя странно, когда группа изменяется во время
итерации, - это нормально.*/

/*class Group {
	constructor() {
		this.members = [];
	}

	add(value) {
		if (!this.has(value)) {
			this.members.push(value);
		}
	}

	delete(value) {
		this.members = this.members.filter(v => v !== value);
	}

	has(value) {
		return this.members.includes(value);
	}

    static from(collection) {
    	let group = new Group;
    	for (let value of collection) {
    		group.add(value);
    	}
    	return
    }

	[Symbol.iterator]() {
    return new GroupIterator(this);
	  }
}

class GroupIterator {
	constructor(group) {
	this.group = group;
	this.position = 0;
	}
}

next() {
    if (this.position >= this.group.members.length) {
    	return {done: true};
    } else {
      let result = {value: this.group.members[this.position],
                    done: false};
      this.position++;
      return result;
    }
}*/
