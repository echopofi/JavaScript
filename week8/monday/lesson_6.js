function talk () {
	return `I am ${this.name}`
}

const me = {
	name: "John",
	talk
}
const you = {
	name: "Jolie",
	talk
}
const them = {
	name: "group"
}

talk.bind(them)
const themTalk = talk.bind(them)

console.log(me.talk())
console.log(you.talk())

console.log(themTalk())

talk.bind(me)
talk() {
	return `I am ${this.name}`
}
const meTalk = talk.bind(me)
console.log(meTalk())

