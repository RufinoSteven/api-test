describe('Crear Usuario', () => {
  it('Crea un nuevo usuario', () => {
    const usuario = {
      id: 1234,
      username: 'UsuarioDePrueba',
      firstName: 'NombreDePrueba',
      lastName: 'ApellidoDePrueba',
      email: 'usuario.prueba@test.com',
      password: '12345678',
      phone: '1234567890',
      userStatus: 1
    };
    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/user',
      body: usuario,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('code').to.be.a('number').to.eq(200);
      expect(response.body).to.have.property('type').to.be.a('string').to.eq('unknown');
      expect(response.body).to.have.property('message').to.be.a('string').to.eq(usuario.id.toString());
    });
  });
});

describe('Obtener usuario creado', () => {
  it('Debería devolver el usuario creado correctamente', () => {
    cy.request({
      method: 'GET',
      url: 'https://petstore.swagger.io/v2/user/UsuarioDePrueba',
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('id').to.be.a('number').to.eq(1234)
      expect(response.body).to.have.property('username').to.be.a('string').to.eq('UsuarioDePrueba')
      expect(response.body).to.have.property('firstName').to.be.a('string').to.eq('NombreDePrueba')
      expect(response.body).to.have.property('lastName').to.be.a('string').to.eq('ApellidoDePrueba')
      expect(response.body).to.have.property('email').to.be.a('string').to.eq('usuario.prueba@test.com')
      expect(response.body).to.have.property('password').to.be.a('string').to.eq('12345678')
      expect(response.body).to.have.property('phone').to.be.a('string').to.eq('1234567890')
      expect(response.body).to.have.property('userStatus').to.be.a('number').to.eq(1)
    })
  })
})

describe('Actualizar correo y nombre del usuario', () => {
  it('Debería actualizar el correo y el nombre del usuario', () => {
    cy.request({
      method: 'PUT',
      url: 'https://petstore.swagger.io/v2/user/UsuarioDePrueba',
      body: {
        "id": 1234,
        "username": "NuevoUsuarioDePrueba",
        "firstName": "NuevoNombre",
        "lastName": "NuevoApellido",
        "email": "nuevo.correo@test.com",
        "password": "12345678",
        "phone": "1234567890",
        "userStatus": 1
      }
    })
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.code).to.eq(200);
      expect(response.body.type).to.eq('unknown');
      expect(response.body.message).to.eq('1234');
    });
  });
});

describe('Obtener usuario actualizado', () => {
  it('Debería devolver el usuario actualizado correctamente', () => {
    cy.request({
      method: 'GET',
      url: 'https://petstore.swagger.io/v2/user/NuevoUsuarioDePrueba',
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('id').to.be.a('number').to.eq(1234);
      expect(response.body).to.have.property('username').to.be.a('string').to.eq('NuevoUsuarioDePrueba');
      expect(response.body).to.have.property('firstName').to.be.a('string').to.eq('NuevoNombre');
      expect(response.body).to.have.property('lastName').to.be.a('string').to.eq('NuevoApellido');
      expect(response.body).to.have.property('email').to.be.a('string').to.eq('nuevo.correo@test.com');
      expect(response.body).to.have.property('password').to.be.a('string').to.eq('12345678')
      expect(response.body).to.have.property('phone').to.be.a('string').to.eq('1234567890')
      expect(response.body).to.have.property('userStatus').to.be.a('number').to.eq(1)
    })
  })
})

describe('Eliminar usuario de la PetStore', () => {
  it('Elimina el usuario recién actualizado', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://petstore.swagger.io/v2/user/NuevoUsuarioDePrueba',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.code).to.eq(200);
      expect(response.body.type).to.eq('unknown');
      expect(response.body.message).to.eq('NuevoUsuarioDePrueba');
    })
  })
})
