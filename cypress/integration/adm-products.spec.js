describe('index', () => {
    it('successfully loads', () => {
        cy.visit('http://127.0.0.1:8000/products')
    })
})