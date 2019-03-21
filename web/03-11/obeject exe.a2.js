var familyBankValues = {

    familyMembers: {

        Mother: {

            "account number": 8096291,

            accountBalance: 10000000

        },

        Father: {

            "account number": 8096292,

            accountBalance: 9999999

        },

        Sister: {

            "account number": 8096293,

            accountBalance: 10000

        },

        "Step-Brother": {

            "account number": 8096292,

            accountBalance: 15000

        }

    }

    }

    console.log(familyBankValues.familyMembers.Mother["account number"]);
    console.log(familyBankValues.familyMembers.Father["account number"]);

    
let stepBrother = [familyBankValues.familyMembers["Step-Brother"]["account number"],familyBankValues.familyMembers["Step-Brother"].accountBalance]

console.log(stepBrother[0])
console.log(stepBrother[1])