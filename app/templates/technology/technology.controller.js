;(function () {
    'use strict';

    angular.module('app')
        .controller('TechnologyController', TechnologyController);


    TechnologyController.$inject = [];

    function TechnologyController() {
        var vm = this;


        vm.tech = [
            {
                title: 'Global',
                link: 'content/img/technology/t1.svg',
                text: 'We are challenging the industry leaders in developing global payments solutions for businesses that need innovating and adaptive infrastructure to exceed on the ever-changing international and domestic markets. We strive to provide our worldwide partners a platform to allow them to build a global customer base, drive growth and deliver incremental value.'
            },
            {
                title: 'Secure and reliable',
                link: 'content/img/technology/t2.svg',
                text: 'Iscopay is Level 1 PSI DSS compliant company and we pride ourselves to provide a safe and secure environment, integrated technology and best-in-class services. With advanced technologies and data centre solutions, we endeavour to provide 99.9% uptime. Our flexible systems are prepared to adapt to a constantly changing environment and continuous innovations in the payment industries.'
            },
            {
                title: 'Modular',
                link: 'content/img/technology/Wide_range.svg',
                text: 'Our modular system is accessible via a comprehensive API and allows customers to choose desirable components to create a truly bespoke service or simply and easily create a complete solution for issuing, acquiring or payment processing. At any time, our customers can change their services by adding or removing specific features, relying on our user-friendly interface and reliable customer support.'
            },
            {
                title: 'Connected',
                link: 'content/img/technology/t4.svg',
                text: 'Our advanced platform allows an easy integration to our API web services or SOAP interface, automated reports delivered on a regular basis and a dedicated data warehouse storage. Our own payment processing centre has a direct connection to authorisation and clearing systems of Visa and MasterCard worldwide. We are regulated by FCA (UK) and operate according to the stringent EU regulations. '
            }
        ];
        vm.features = [
            {
                link: 'content/img/technology/10.svg',
                title: 'One-click payments',
                text: 'One-click payments are perfectly suited for your loyal or repeat customers to pay for goods or services within a second. With Decta`s one-click payments, you can simplify payments and integrate the PAY NOW button into your website or mobile app, making online shopping as simple as one click'
            },
            {
                link: 'content/img/technology/1.svg',
                title: 'Original Credit Transaction (OCT) and Money Send',
                text: 'We offer a safe and reliable solution to send money to the customer with only a card number. Our innovative service enables secure money transfers to all Visa and MasterCard accounts allowing processing transaction refund.'
            },
            {
                link: 'content/img/technology/2.svg',
                title: 'Payment by link and invoice',
                text: 'A simple and convenient feature that enables to create and send customised emails to your customers with a PAY NOW button. The button generates an invoice and lets customers pay by credit and debit card.'
            },
            {
                link: 'content/img/technology/3.svg',
                title: 'Recurring billing',
                text: 'You will be able to charge a customer a subscription on a repeat basis. The customer will only need to enter the card details once and the payment will be deducted automatically according to the predefined schedule'
            },
            {
                link: 'content/img/technology/4.svg',
                title: 'Mail Order and Telephone Order payments',
                text: 'Accept payments over the phone or by fax. MOTO is a secure web-based portal that can also work as a virtual POS. You can accept payments from anywhere with only an internet connection.'
            },
            {
                link: 'content/img/technology/5.svg',
                title: 'Dynamic Descriptor',
                text: 'A dynamic descriptor allows describing a payment to help identify a transaction. Cardholders will get a clearer readability of their bank statements and can easy recognise transactions. Merchants can reduce the risk of chargeback and transaction dispute.'
            },
            {
                link: 'content/img/technology/6.svg',
                title: 'Airline Addendum',
                text: 'Our Airline Addendum service allows adding additional information regarding airline transaction to the account statement. Full transaction transparency and simplified accounting for companies allow airlines to increase the volume of transactions with corporate cards.'
            },
            {
                link: 'content/img/technology/7.svg',
                title: 'Multi-currency processing',
                text: 'Iscopay accepts multi-currency payments as part of standard processing services. Global customers require merchants to offer flexible payment methods, which creates more opportunities for business growth and international expansion. We offer processing in USD, EUR, GBP, AUD, CHF, DKK, SEK, CAD, NOK, PLN, RUB, CZK and other currencies'
            },
            {
                link: 'content/img/technology/3D_Secure.svg',
                title: '3D Secure',
                text: '3D Secure is a joint initiative of Visa, MasterCard, and Amex to improve the security of card-not-present transaction processing. This added layer of protection provides safe and secure online payment experience via supplementary password validated by the card issuer.'
            },
            {
                link: 'content/img/technology/9.svg',
                title: 'Fraud and Risk Management',
                text: 'Our services allow you to monitor transactions and set parameters for anti-fraud safety measures. A range of restrictions integrated with 3-D Secure allows you to experience efficient fraud protection while maximising numbers of successful transactions.'
            },
            {
                link: 'content/img/technology/11.svg',
                title: 'Dispute Management and Chargeback Processing',
                text: 'Iscopay provides Acquirers with dispute management services, including chargeback processing, refunds, and claims to the merchants. We also offer comprehensive reporting and analytical services to help manage and improve card processing functions and decrease costs.'
            }

        ];

        $(document).ready(function () {

            // accordion effect

            var acc = document.getElementsByClassName("accordion");
            var i;

            for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    if (panel.style.maxHeight){
                        panel.style.maxHeight = null;
                    } else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                    }
                });
            }

        });
    }
})();