const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const customerName = order.name;
  const customerPhone = order.phoneNumber;
  const customerAddress = `R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;

  console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, ${customerAddress}`);
}

customerInfo(order);

const orderModifier = (order) => {
  const newCustomer = order.name = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const drink = order.order.drinks.coke.type;
  const newPrice = order.payment.total = 50;

  console.log(`Olá ${newCustomer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drink} é R$ ${newPrice},00.`);
}

orderModifier(order);

console.log(order);