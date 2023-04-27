class Person {
    speak(name) {
        return `Ola ${name?.toLocaleUpperCase() ?? 'Fulano'}`;
    }
}
const p = new Person();
p.speak();
p.speak('Warley');
