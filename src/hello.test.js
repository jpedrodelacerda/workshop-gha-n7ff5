const { hello } = require("./hello");

test("Retorna 'Olá mundo!'", () => {
    expect(hello()).toBe("Olá mundo!");
});
