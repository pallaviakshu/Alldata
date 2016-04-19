var app = angular.module("myApp",["ngAnimate"]);

app.factory("contacts",function() {
  return [
    {"firstName": "Angle", "lastName": "Britt","phone": "9876543256"},
    {"firstName": "pratik", "lastName": "shinde","phone": "98679594675"},
    {"firstName": "vaibhav", "lastName": "jadhav","phone": "78689789564"},
    {"firstName": "monika", "lastName": "gaikwad","phone": "898954354554"},
    {"firstName": "varsha", "lastName": "compton","phone": "7898-7685"},
    {"firstName": "pallavi", "lastName": "mehra","phone": "9876-756"},
    {"firstName": "pragati", "lastName": "roy","phone": "9744-45556"}
  ];
});

app.controller("AppCtrl",function(contacts) {
    this.contacts = contacts;
    this.selectedContact = null;
    this.contactCopy = null;

    this.selectedContact = function(contact) {
        this.selectedContact = contact;
        this.contactCopy = angular.copy(contact);
    }

    this.saveContact = function() {
        this.selectedContact.firstName = this.contactCopy.firstName;
    }
});