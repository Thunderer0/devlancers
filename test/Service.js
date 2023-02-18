const { expect } = require('chai');
const { ethers } = require('hardhat');


const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}


describe("Service", () => {
    let service;

    beforeEach( async() => {
        [owner, worker, customer] = await ethers.getSigners()
        
        const Service = await ethers.getContractFactory("Service")
        service = await Service.deploy();

    })

    describe('testing deployment', () => {

        it('checks for owner', async () => {
            const _owner = await service.owner()
            expect(_owner).to.equal(owner.address);
        } )
    })
})