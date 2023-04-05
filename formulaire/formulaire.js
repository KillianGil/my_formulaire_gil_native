//Code creer et modifier par : Killian Gil
import React, { useState } from 'react';
import TexteInput from './TexteInput';
import ButtonEnvoyer from "./ButtonEnvoyer";
import ListeCheckbox from "./ListeCheckbox";
import {Alert} from "react-native";
const Formulaire = () => {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        interet: [],
        nomError: 'Ce champ ne peut pas être vide',
        prenomError: 'Ce champ ne peut pas être vide',
        emailError: "Ce format n'est pas un e-mail valide",
        interetError: 'Veuillez choisir au moins un centre d\'intérêt',
    });

    //fonction pour valider l'email
    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    //fonction pour valider si le champ n'est pas vide
    const validateNonVide = (value) => {
        return value.trim() !== '';
    };

    //fonction pour gerer les inputs, si l'input est vide on affiche un message d'erreur
    const handleChange = (name, value) => {
        let updatedError = '';

        if (name === 'email') {
            updatedError = !validateEmail(value) ? "Ce format n'est pas un e-mail valide" : '';
        } else if (name === 'nom' || name === 'prenom') {
            updatedError = !validateNonVide(value) ? 'Ce champ ne peut pas être vide' : '';
        }

        setFormData({ ...formData, [name]: value, [`${name}Error`]: updatedError });
    };

    //fonction pour gerer les checkbox, si la checkbox est coché on ajoute l'interet dans le tableau interet
    //sinon on le supprime du tableau, si le tableau est vide on affiche un message d'erreur
    const handleCheckboxChange = (name) => {
        let updatedInterets = formData.interet;
        if (updatedInterets.includes(name)) {
            updatedInterets = updatedInterets.filter((interet) => interet !== name);
        } else {
            updatedInterets.push(name);
        }

        setFormData({
            ...formData,
            interet: updatedInterets,
            interetError: updatedInterets.length === 0 ? "Veuillez choisir au moins un centre d'intérêt" : '',
        });
    };

    //fonction pour gerer le submit du formulaire, si le formulaire est valide on affiche un message
    //sinon on affiche un message d'erreur
    const handleSubmit = () => {
        const { nom, prenom, email, nomError, prenomError, emailError, interetError } = formData;
        if (nomError || prenomError || emailError || interetError || !nom || !prenom || !email) {
            Alert.alert('Veuillez remplir le formulaire correctement');
        } else {
            Alert.alert('Formulaire envoyé');
            //reset les champs
            setFormData({
                nom: '',
                prenom: '',
                email: '',
                interet: [],
                nomError: 'Ce champ ne peut pas être vide',
                prenomError: 'Ce champ ne peut pas être vide',
                emailError: "Ce format n'est pas un e-mail valide",
                interetError: 'Veuillez sélectionner au moins un centre d\'intérêt'
            });
        }
    };

//tableau pour les checkbox
    const interet = ['Sport', 'Cuisine', 'Cinéma', 'Lecture', 'Musique', 'Jeu Video', 'Foot'];

//affichage du formulaire
    return (
        <View>
            <TexteInput
                label="Nom"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                errorMessage={formData.nomError}
            />
            <TexteInput
                label="Prénom"
                id="prenom"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                errorMessage={formData.prenomError}
            />
            <TexteInput
                label="Email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                errorMessage={formData.emailError}
            />
            <ListeCheckbox
                label="Centre d'intérêt"
                options={interet}
                selectedOptions={formData.interet}
                onChange={handleCheckboxChange}
                errorMessage={formData.interetError}
            />
            <ButtonEnvoyer label="Envoyer" onPress={handleSubmit} />
        </View>
    );
};

export default Formulaire;
