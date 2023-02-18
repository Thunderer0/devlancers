// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract CreditFi {

    address public owner;



    constructor() {
        owner = msg.sender;
    }


    //mappings


    mapping (address => User) public users;
    mapping (address => Organization) public organizations;


    //enums
    enum CreditCategory {greenCredit, blueCredit, eduCredit, healthCredit, pinkCredit, hungerCredit}

    //structers

    struct User{
        string name;
        string email;
        string ph_num;
        string description;
        uint greenCredit;
        uint blueCredit;
        uint eduCredit;
        uint healthCredit;
        uint pinkCredit;
        uint hungerCredit;
        uint activityCount;
    }


    struct  Organization {
        string name;
        string email;
        string ph_num;
        uint greenCredit;
        uint blueCredit;
        uint eduCredit;
        uint healthCredit;
        uint pinkCredit;
        uint hungerCredit;
    }



    struct Activity {
        address user;
        string title;
        string[] fileHashes;
        string description;
        CreditCategory category;
        uint upvote;
        uint downvote;
        uint raisedAmount;
    }

    //Events
    event userCreated(address _user, string _name);
    event organizationCreated(address _organisation, string _name);


    function createUser(string memory name, string memory email, string memory ph_num, string memory description) public returns (bool) {
        require(bytes(name).length >0);
        users[msg.sender] = User(name, email, ph_num, description, 0, 0, 0, 0, 0, 0, 0);
        emit userCreated(msg.sender, name);
        return true;
    }

    function createOrganization(string memory name, string memory email, string memory ph_num) public returns (bool) {
        require(bytes(name).length >0);
        require(bytes(email).length >0);
        require(bytes(ph_num).length >0);
        organizations[msg.sender] = Organization(name, email, ph_num, 0, 0, 0, 0, 0, 0);
        emit organizationCreated(msg.sender, name);
        return true;
    }


    // function createActivity(string memory title, string[] memory fileHashes, string memory description, uint8 category)  returns (bool) {
        
    // }


    









    




}