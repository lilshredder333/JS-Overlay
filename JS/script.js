function dropdownCompra() {
    const overlayNuri = document.querySelector('.overlayNuri');
    const btnCerrarMenu = document.getElementById('close');

    const isVisible = overlayNuri.style.visibility === 'visible';

    overlayNuri.style.visibility = isVisible ? 'hidden' : 'visible';
    overlayNuri.style.height = isVisible ? '0' : '100%';
    btnCerrarMenu.style.visibility = isVisible ? 'hidden' : 'visible';
}

document.getElementById('paymentNuri').addEventListener('submit', function (event) {
    event.preventDefault();

    if (validateForm()) {
        datosPagoNuri();
    } else {
        alert('Por favor, rellena todos los campos!');
    }
});

function validateForm() {
    const requiredFields = ['firstname', 'lastname', 'CardNum', 'paymentMethod'];

    for (const fieldId of requiredFields) {
        const fieldValue = getValue(fieldId);
        if (fieldValue === '') {
            console.log(`${fieldId} is empty`);
            return false;
        }
    }

    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    if (!paymentMethod) {
        console.log('Payment Method not selected');
        return false;
    }

    return true;
}

function datosPagoNuri() {
    const firstName = getValue('firstname');
    const lastName = getValue('lastname');
    const cardNumber = getValue('CardNum');
    const paymentMethod = getValue('paymentMethod');

    console.log('Moto comprada por:', firstName);
    console.log('Last Name:', lastName);
    console.log('Card Number:', cardNumber);
    console.log('Payment Method:', paymentMethod);

    document.getElementById('result').innerText = `Moto comprada por: ${firstName}`;
    resetForm('paymentNuri');
}

function validateForm() {
    const requiredFields = ['firstname', 'lastname', 'CardNum', 'paymentMethod'];

    for (const fieldId of requiredFields) {
        const fieldValue = getValue(fieldId);
        if (fieldValue === '') {
            console.log(`${fieldId} is empty`);
            return false;
        }
    }

    const paymentMethod = getValue('paymentMethod');
    if (paymentMethod === '') {
        console.log('Payment Method not selected');
        return false;
    }

    return true;
}


function resetForm(formId) {
    document.getElementById(formId).reset();
}



