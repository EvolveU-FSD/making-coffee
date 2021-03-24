
let allinone =     
    {
    name: "jack",
    grabKeys() {console.log("Grab keys")},
    openMyMailbox() {console.log("open my mailbox")},

    dootherjob() {
    this.getmaymails()
    this.closemymailbox()
    this.end() },

    getmaymails() {console.log("get may mails")},
    closemymailbox() {console.log("close my mailbox")},
    end() {console.log("End")}
}

//export all function as whole
module.exports = allinone