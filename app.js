let form = document.querySelector(".register-form");




form.name.addEventListener("change", () => {
    validName(form.name);
});

const validName = (inputName) => {
    let nameRegExp = new RegExp(
        '^[A-Z][a-z]*$', 
        'g'
    );
    let testName = nameRegExp.test(inputName.value);
    let smallName = document.querySelector(".paragraph-name");
   
        
    
    if (testName) {
        smallName.innerHTML = "Pseudo valide";
        return true;
    } else {
        smallName.innerHTML = "Veuillez mettre votre première lettre en majuscule";
        return false;
    }
};




form.password.addEventListener("change", () => {
    validPassword(form.password);
});

const validPassword = (inputPassword) => {
    let passwordRegExp = new RegExp(
        '^(?=.*?[A-Z])(?=.*?[0-9]).{8,}$', 
        'g'
    );
    let testPassword = passwordRegExp.test(inputPassword.value);
    let smallPassword = document.querySelector(".paragraph-password");
   
        
    
    if (testPassword) {
        smallPassword.innerHTML = "Mot de passe valide";
        return true;
    } else {
        smallPassword.innerHTML = "Il faut minimum huit caractères, une majuscule et un chiffre";
        return false;
    }
    
};


form.email.addEventListener("change", () => {
    validEmail(form.email);
});

const validEmail = (inputEmail) => {
    let emailRegExp = new RegExp(
        '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 
        'g'
    );
    let testEmail = emailRegExp.test(inputEmail.value);
    let smallEmail = document.querySelector(".paragraph-email");
   
        
    
    if (testEmail) {
        smallEmail.innerHTML = "Adresse Valide";
        return true;
    } else {
        smallEmail.innerHTML = "Adresse non valide";
        return false;
    }
     
};

document.body.addEventListener("submit", () => {
    validAll(document.body);
})


const validAll = (inputAll) => {
    
    if(validName(form.name) && validPassword(form.password) && validEmail(form.email)) {
        alert("Bienvenue l'artiste !")
    }
    
}






