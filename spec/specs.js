describe('Contact', function(){
  it("will create a new contact with the given properties", function (){
    var testContact = new Contact("Joey", "Arnstein");
    expect(testContact.firstName).to.equal("Joey")
    expect(testContact.lastName).to.equal("Arnstein")
    expect(testContact.addresses).to.eql([]);
  });

  it("will add fullName method to a contact", function(){
    var testContact = new Contact("Joey", "Arnstein");
    expect(testContact.fullName()).to.equal("Joey Arnstein");
  });
});
