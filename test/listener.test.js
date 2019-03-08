'use strict';

const event = {
  "awslogs": {
    "data": "H4sIAAAAAAAAAGVTW2/TMBT+K5FfmTdfk7hvXTumCToq0gkhMiEncVaL1Ilsp9U07b9zkm4CxKPPOd/F37Ff0MGEoJ/M7nkwaIHWy93y5+amKJa3N+gC9SdnPJTzPOWMqIwKyaHc9U+3vh8H6AQXrsyITyZETK/+nrtaW2/quB2rzob9rt/ue2fux0MFjDNFEb3RB+DIqtRQoTUWqlVYNBnFeSsz3CpClJBVSzUDSBirUHs7RNu7j7aLxge0+IFOutM4HAIGyoBjj5umwo054i+u2BSb8/U+Q6/4D7/q+rH5pmO9hz7F9Jrcfiqut3ff1ylDj7PJm6NxcdJ5QbYBr1xwohTjlCqZiVQKRiQXKpM0JyyjkqaEKyHyLOeEcC5yQqWkPAX/0ULWUR8gNip5LimhKZNUXLzvAOhfSuT6aFtb68lmiRZQeWvfNXAsUdayXEvFcaPaFkvCM1xVqcItrQxNc6rb1JToovyjN8MYoTmmBBOWULWQciHYJU9liV5htDGdPRr/fNYbpk2ttPfW+Bm72d3PjAdXw5mSGRGide8mS/SBwY25oiwTbJ4dvK3NnXso1tAnl4RBJlCGRU1PbcbsvHZB1xOH7s4C9SSQSjkT9EfbGP/VhKF34Qx5W2ey1yGpjHGJrmszRNMk1XMy+07qd+OTy5Ppuh3ksAkAh5f5b+3BRdutzRGcLutfMMEzzqY8ILY4hlmxeFit4D9ATuj18fU3G7xSWzADAAA="
}
}



describe('to parse the function', () => {
  process.env.AWS_REGION = 'eu-west-1';
  process.env.AWS_PROFILE = 'sandbox';
  const listener = require('../src/listener');
  listener.onSMSMessage(event, {} ,(error,result) => {
    if(error){
      console.log(error);
    }
    console.log(result);
  });
})