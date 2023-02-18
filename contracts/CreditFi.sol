// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./safemath.sol";

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract CreditFi {
    using SafeMath for uint256;
    address public owner;
    uint public activityCount;



    constructor() {
        owner = msg.sender;
        activityCount = 0;
    }


    //mappings


    mapping (address => User) public users;
    mapping(address => bool) private userExists;
    mapping (address => Organization) public organizations;


    //enums
    enum CreditCategory {greenCredit, blueCredit, eduCredit, healthCredit, pinkCredit, hungerCredit}
    enum ActivityStatus {unverified, verified}

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
        uint activityId;
        address user;
        string title;
        string[] fileHashes;
        string description;
        CreditCategory category;
        ActivityStatus status;
        uint upvotes;
        uint downvotes;
        uint raisedAmount;
    }

    //Arrays
    Activity[] public activities;

    //Events
    event userCreated(address _user, string _name);
    event organizationCreated(address _organisation, string _name);
    event activityCreated(string _title, address _user);


    function createUser(string memory name, string memory email, string memory ph_num, string memory description) public returns (bool) {
        require(bytes(name).length >0);
        users[msg.sender] = User(name, email, ph_num, description, 0, 0, 0, 0, 0, 0, 0);
        emit userCreated(msg.sender, name);
        return true;
    }

    
    function getUser(address userAddress) public view returns (User memory) {
    if (userExists[userAddress]) {
        return users[userAddress];
    } else {
        return User("", "", "", "", 0, 0, 0, 0, 0, 0, 0);
    }
    }

    function createOrganization(string memory name, string memory email, string memory ph_num) public returns (bool) {
        require(bytes(name).length >0);
        require(bytes(email).length >0);
        require(bytes(ph_num).length >0);
        organizations[msg.sender] = Organization(name, email, ph_num, 0, 0, 0, 0, 0, 0);
        emit organizationCreated(msg.sender, name);
        return true;
    }



    function createActivity(string memory _title, string[] memory _fileHashes, string memory _description, uint8 _category)  public returns (bool) {
        require(bytes(_title).length >0);
        CreditCategory _creditCategory = CreditCategory(_category);

        Activity memory newactivity = Activity({
            activityId : activityCount,
            user: msg.sender,
            title: _title,
            fileHashes: _fileHashes,
            description: _description,
            category: _creditCategory,
            status: ActivityStatus.unverified,
            upvotes : 0,
            downvotes : 0,
            raisedAmount : 0
        });
        activities.push(newactivity);
        activityCount.add(1);
        emit activityCreated(_title, msg.sender);
        return true;
    }

    function getActivities() public view returns (Activity[] memory) {
        return activities;
    }

    function upVote(uint _activityId) public returns (bool) {
        activities[_activityId].upvotes += 1;
        return true;
    }

    function downVote(uint _activityId) public returns (bool) {
        activities[_activityId].downvotes += 1;
        return true;
    }


    









    




}