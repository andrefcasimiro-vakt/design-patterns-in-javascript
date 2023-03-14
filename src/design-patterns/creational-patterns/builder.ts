class User {
    constructor(
        public username: string,
        public sex: string,
        public age: number,
        public photo: string,
        public email: string,
    ){}
}

const newUser = new User("username", "male", 27, "", "username@email.com")

class UserBuilder {
    public username!: string;
    public sex!: string;
    public age!: number;
    public photo!: string;
    public email!: string;

    setUserName(username: string) {
        this.username = username
        return this
    }
    setSex(sex: string) {
        this.sex = sex
        return this
    }
    setAge(age: number) {
        this.age = age
        return this
    }
    setPhoto(photo: string) {
        this.photo = photo
        return this
    }
    setEmail(email: string) {
        this.email = email
        return this
    }

    build() {
        return new User(this.username, this.sex, this.age, this.photo, this.email)
    }
}

const newUser2 = new UserBuilder()
    .setAge(30)
    .setSex("male")
    .setEmail("email@email.com")
    .setPhoto("")
    .setUserName("newUser2")
    .build()
