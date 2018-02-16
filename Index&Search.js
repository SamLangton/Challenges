function orchestrateUsers(users) {
    console.log = users;
    orchestrated = users.filter(Type);
    console.log = orchestrated;
    
}
function Type(users)
{
    return users.type = "Admin";
}
 
function searchUsers(orchestratedUsers, userTypes, property, value) {
    // Add code here
}

var users = [
    {
      "name": "Joe",
      "companyId": "A2100",
      "type": "Admin"
    },
    {
      "name": "Jane",
      "companyId": "A2100",
      "type": "Moderator"
    },
    {
      "name": "Smith",
      "companyId": "A2100",
      "type": "User"
    },
    {
      "name": "Smith",
      "companyId": "A2100",
      "type": "User"
    },
    {
      "name": "Rocket",
      "companyId": "A3100",
      "type": "Admin"
    },
    {
      "name": "Rick",
      "companyId": "A3100",
      "type": "User"
    },
    {
      "name": "Tim",
      "companyId": "A4100",
      "type": "Admin"
    }
  ]

  orchestrateUsers(users);