// Fonction pour valider l'âge
function validateAge(age) {
    return age >= 18 && age <= 45; // L'âge doit être compris entre 18 et 45 ans
}

// Fonction pour valider l'email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Fonction pour mettre à jour le CV et le local storage
function updateCV(event) {
    console.log('Fonction updateCV appelée'); // Debug

    // Récupérer toutes les valeurs du formulaire
    const formData = {
        nom: document.getElementById('nom') ? document.getElementById('nom').value : '',
        age: document.getElementById('age') ? document.getElementById('age').value : '',
        gender: document.getElementById('gender') ? document.getElementById('gender').value : '',
        poste: document.getElementById('poste') ? document.getElementById('poste').value : '',
        experience: document.getElementById('experience') ? document.getElementById('experience').value : '',
        email: document.getElementById('email') ? document.getElementById('email').value : '',
        adresse: document.getElementById('adresse') ? document.getElementById('adresse').value : '',
        telephone: document.getElementById('telephone') ? document.getElementById('telephone').value : '',
        situation: document.getElementById('situation') ? document.getElementById('situation').value : '',
        posteocc: document.getElementById('posteocc') ? document.getElementById('posteocc').value : '',
        Nentreprise: document.getElementById('Nentreprise') ? document.getElementById('Nentreprise').value : '',
        datedebut: document.getElementById('datedebut') ? document.getElementById('datedebut').value : '',
        datefin: document.getElementById('datefin') ? document.getElementById('datefin').value : '',
        mission: document.getElementById('mission') ? document.getElementById('mission').value : '',
        diplome: document.getElementById('diplome') ? document.getElementById('diplome').value : '',
        Etablissement: document.getElementById('Etablissement') ? document.getElementById('Etablissement').value : '',
        anneeob: document.getElementById('anneeob') ? document.getElementById('anneeob').value : '',
        competence: document.getElementById('competence') ? document.getElementById('competence').value : '',
        langue: document.getElementById('langue') ? document.getElementById('langue').value : '',
        loisir: document.getElementById('loisir') ? document.getElementById('loisir').value : '',
        NomR: document.getElementById('NomR') ? document.getElementById('NomR').value : '',
        posteR: document.getElementById('posteR') ? document.getElementById('posteR').value : '',
        conctactR: document.getElementById('conctactR') ? document.getElementById('conctactR').value : '',
        niveaulangue: document.getElementById('niveaulangue') ? document.getElementById('niveaulangue').value : '',
        competences: Array.from(document.querySelectorAll('#listeCompetences .competence-item')).map(el => ({
            nom: el.querySelector('.competence-nom').textContent,
            niveau: el.querySelector('.competence-niveau').textContent
        })),
        langues: Array.from(document.querySelectorAll('#listeLangues .langue-item')).map(el => ({
            nom: el.querySelector('.langue-nom').textContent,
            niveau: el.querySelector('.langue-niveau').textContent
        })),
    };

    console.log('Données du formulaire :', formData); // Debug

    // Mettre à jour le local storage à chaque modification
    localStorage.setItem('cvFormData', JSON.stringify(formData));

    // Mettre à jour le CV
    if (document.getElementById('nomprenomcv')) document.getElementById('nomprenomcv').textContent = formData.nom;
    if (document.getElementById('agecv')) document.getElementById('agecv').textContent = formData.age;
    if (document.getElementById('sexecv')) document.getElementById('sexecv').textContent = formData.gender;
    if (document.getElementById('titrepostecv')) document.getElementById('titrepostecv').textContent = formData.poste;
    if (document.getElementById('descriptioncv')) document.getElementById('descriptioncv').textContent = formData.experience;
    if (document.getElementById('emailcv')) document.getElementById('emailcv').textContent = formData.email;
    if (document.getElementById('adressecv')) document.getElementById('adressecv').textContent = formData.adresse;
    if (document.getElementById('telephonecv')) document.getElementById('telephonecv').textContent = formData.telephone;
    if (document.getElementById('situationmatimoniale')) document.getElementById('situationmatimoniale').textContent = formData.situation;
    if (document.getElementById('posteoccupecv')) document.getElementById('posteoccupecv').textContent = formData.posteocc;
    if (document.getElementById('nomEntreprisecv')) document.getElementById('nomEntreprisecv').textContent = formData.Nentreprise;
    if (document.getElementById('dureecv')) {
        document.getElementById('dureecv').textContent = `${formData.datedebut} - ${formData.datefin}`;
    }
    if (document.getElementById('descriptionMissioncv')) document.getElementById('descriptionMissioncv').textContent = formData.mission;
    if (document.getElementById('diplomecv')) document.getElementById('diplomecv').textContent = formData.diplome;
    if (document.getElementById('etablissementcv')) document.getElementById('etablissementcv').textContent = formData.Etablissement;
    if (document.getElementById('anneeObtentioncv')) document.getElementById('anneeObtentioncv').textContent = formData.anneeob;
    if (document.getElementById('competencecv')) document.getElementById('competencecv').textContent = formData.competence;
    if (document.getElementById('languecv')) document.getElementById('languecv').textContent = formData.langue;
    if (document.getElementById('centreInteretcv')) document.getElementById('centreInteretcv').textContent = formData.loisir;
    if (document.getElementById('NomRcv')) document.getElementById('NomRcv').textContent = formData.NomR;
    if (document.getElementById('posteRcv')) document.getElementById('posteRcv').textContent = formData.posteR;
    if (document.getElementById('contactRcv')) document.getElementById('contactRcv').textContent = formData.conctactR;
    if (document.getElementById('niveaulanguecv')) document.getElementById('niveaulanguecv').textContent = formData.niveaulangue;

    // Mettre à jour les compétences dans le CV
    const cvCompetences = document.getElementById('cvCompetences');
    if (cvCompetences) {
        cvCompetences.innerHTML = formData.competences.map(competence => `
            <li class="list-group-item">
                <div class="competence-item">
                    <span class="competence-nom">${competence.nom}</span>
                    <div class="competence-niveau">${competence.niveau}</div>
                </div>
            </li>
        `).join('');
    }

    // Mettre à jour les langues dans le CV
    const cvLangues = document.getElementById('cvLangues');
    if (cvLangues) {
        cvLangues.innerHTML = formData.langues.map(langue => `
            <li class="list-group-item">
                <div class="langue-item">
                    <span class="langue-nom">${langue.nom}</span>
                    <div class="langue-niveau">${langue.niveau}</div>
                </div>
            </li>
        `).join('');
    }
}

// Attacher les écouteurs d'événements
function attachEventListeners() {
    // Écouteurs pour la prévisualisation en temps réel
    document.querySelectorAll('#cvForm input, #cvForm select, #cvForm textarea').forEach(element => {
        element.addEventListener('input', function (event) {
            console.log('Champ modifié :', event.target.id); // Debug
            updateCV(event);
        });
        element.addEventListener('change', function (event) {
            console.log('Champ changé :', event.target.id); // Debug
            updateCV(event);
        });
    });
 
    const ageInput = document.getElementById('age');
if (ageInput) {
    ageInput.addEventListener('blur', function (event) {
        const age = event.target.value;
        if (age && !validateAge(age)) {
            alert("L'âge doit être compris entre 18 et 45 ans.");
            ageInput.classList.add('error'); // Ajoute la classe error
        } else {
            ageInput.classList.remove('error'); // Supprime la classe error si l'âge est valide
        }
    });
}

const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function (event) {
            const email = event.target.value;
            if (email && !validateEmail(email)) {
                alert("Veuillez entrer une adresse email valide.Voici un exemple: jojo@gmail.com");
                emailInput.classList.add('error'); // Ajoute la classe error
            } else {
                emailInput.classList.remove('error'); // Supprime la classe error si l'âge est valide
            
            }
        });
    }
}

// Charger les données au démarrage
window.addEventListener('load', function () {
    console.log('Page chargée'); // Debug

    const savedData = localStorage.getItem('cvFormData');
    if (savedData) {
        const formData = JSON.parse(savedData);
        console.log('Données chargées depuis le localStorage :', formData); // Debug

        // Remplir les champs du formulaire avec les données sauvegardées
        if (document.getElementById('nom')) document.getElementById('nom').value = formData.nom || '';
        if (document.getElementById('age')) document.getElementById('age').value = formData.age || '';
        if (document.getElementById('gender')) document.getElementById('gender').value = formData.gender || '';
        if (document.getElementById('poste')) document.getElementById('poste').value = formData.poste || '';
        if (document.getElementById('experience')) document.getElementById('experience').value = formData.experience || '';
        if (document.getElementById('email')) document.getElementById('email').value = formData.email || '';
        if (document.getElementById('adresse')) document.getElementById('adresse').value = formData.adresse || '';
        if (document.getElementById('telephone')) document.getElementById('telephone').value = formData.telephone || '';
        if (document.getElementById('situation')) document.getElementById('situation').value = formData.situation || '';
        if (document.getElementById('posteocc')) document.getElementById('posteocc').value = formData.posteocc || '';
        if (document.getElementById('Nentreprise')) document.getElementById('Nentreprise').value = formData.Nentreprise || '';
        if (document.getElementById('datedebut')) document.getElementById('datedebut').value = formData.datedebut || '';
        if (document.getElementById('datefin')) document.getElementById('datefin').value = formData.datefin || '';
        if (document.getElementById('mission')) document.getElementById('mission').value = formData.mission || '';
        if (document.getElementById('diplome')) document.getElementById('diplome').value = formData.diplome || '';
        if (document.getElementById('Etablissement')) document.getElementById('Etablissement').value = formData.Etablissement || '';
        if (document.getElementById('anneeob')) document.getElementById('anneeob').value = formData.anneeob || '';
        if (document.getElementById('competence')) document.getElementById('competence').value = formData.competence || '';
        if (document.getElementById('langue')) document.getElementById('langue').value = formData.langue || '';
        if (document.getElementById('loisir')) document.getElementById('loisir').value = formData.loisir || '';
        if (document.getElementById('NomR')) document.getElementById('NomR').value = formData.NomR || '';
        if (document.getElementById('posteR')) document.getElementById('posteR').value = formData.posteR || '';
        if (document.getElementById('conctactR')) document.getElementById('conctactR').value = formData.conctactR || '';
        if (document.getElementById('niveaulangue')) document.getElementById('niveaulangue').value = formData.niveaulangue || '';

        // Mettre à jour le CV
        updateCV({ target: {} });
    }

    // Attacher les écouteurs d'événements
    attachEventListeners();
});

// Gérer l'upload de la photo
const photoInput = document.getElementById('photo');
if (photoInput) {
    photoInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const photoCv = document.getElementById('photoCv');
                if (photoCv) {
                    photoCv.src = e.target.result;
                }
            };
            reader.readAsDataURL(file);
        }
    });
}

window.ajouterFormation = function () {
    const diplome = document.getElementById("diplome").value;
    const etablissement = document.getElementById("Etablissement").value;
    const anneeObtention = document.getElementById("anneeob").value;

    if (diplome && etablissement && anneeObtention) {
        const id = Date.now().toString();
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.dataset.id = id;
        li.innerHTML = `
            <div>
                <strong>${diplome}</strong> - ${etablissement} (${anneeObtention})
            </div>
            <button class="btn btn-danger btn-sm float-end" onclick="supprimerFormation('${id}')">❌</button>
        `;
        
        listeFormations.appendChild(li);

        const liSansBouton = li.cloneNode(true);
        liSansBouton.querySelector("button").remove();
        liSansBouton.dataset.id = id;
        cvFormation.appendChild(liSansBouton);
        
        // Mettre à jour le CV et le local storage
        updateCV({ target: {} });
    }
};
// Fonction pour supprimer une formation
window.supprimerFormation = function (id) {
    console.log('Supprimer une formation :', id); // Debug

    const elementListe = document.querySelector('#listeFormations li[data-id="${id}"]');
    if (elementListe) {
        elementListe.remove();
    }

    const elementCV = document.querySelector(`#cvFormations li[data-id="${id}"]`);
    if (elementCV) {
        elementCV.remove();
    }

    // Mettre à jour le CV et le local storage
    updateCV({ target: {} });
};


// Fonction pour ajouter un centre d'intérêt
window.ajouterCentreInteret = function () {
    console.log('Ajouter un centre d\'intérêt'); // Debug
    

    const loisir = document.getElementById("loisir").value;

    if (loisir.trim() !== "") {
        const id = Date.now().toString();

        const li = document.createElement("li");
        li.className = "list-group-item";
        li.dataset.id = id;
        li.innerHTML = `
            <div class="centre-interet-item">
                <span class="centre-interet-nom">${loisir}</span>
            </div>
            <button class="btn btn-danger btn-sm float-end" onclick="supprimerCentreInteret('${id}')">❌</button>
        `;

        listeCentresInteret.appendChild(li);

        const liSansBouton = li.cloneNode(true);
        liSansBouton.querySelector("button").remove();
        liSansBouton.dataset.id = id;
        cvCentreInteret.appendChild(liSansBouton);

        document.getElementById("loisir").value = "";
       
        // Mettre à jour le CV et le local storage
        updateCV({ target: {} });
    }
};

// Fonction pour supprimer un centre d'intérêt
window.supprimerCentreInteret = function (id) {
    console.log('Supprimer un centre d\'intérêt :', id); // Debug

    const elementListe = document.querySelector('#listeCentresInteret li[data-id="${id}"]');
    if (elementListe) {
        elementListe.remove();
    }

    const elementCV = document.querySelector('#cvCentresInteret li[data-id="${id}"]');
    if (elementCV) {
        elementCV.remove();
    }

    // Mettre à jour le CV et le local storage
    updateCV({ target: {} });
};

// Fonction pour ajouter une compétence
window.ajouterCompetence = function () {
    console.log('Ajouter une compétence'); // Debug

    const competence = document.getElementById("competence").value;
    const niveau = document.getElementById("niveauCompetence").value;

    if (competence.trim() !== "") {
        const id = Date.now().toString();

        const li = document.createElement("li");
        li.className = "list-group-item";
        li.dataset.id = id;
        li.innerHTML = `
            <div class="competence-item">
                <span class="competence-nom">${competence}</span>
                <div class="competence-niveau">Niveau: ${niveau}%</div>
            </div>
            <button class="btn btn-danger btn-sm float-end" onclick="supprimerCompetence('${id}')">❌</button>
        `;

        listeCompetences.appendChild(li);

        const liSansBouton = li.cloneNode(true);
        liSansBouton.querySelector("button").remove();
        liSansBouton.dataset.id = id;
        cvCompetences.appendChild(liSansBouton);

        document.getElementById("competence").value = "";

        // Mettre à jour le CV et le local storage
        updateCV({ target: {} });
    }
};

// Fonction pour supprimer une compétence
window.supprimerCompetence = function (id) {
    console.log('Supprimer une compétence :', id); // Debug

    const elementListe = document.querySelector('#listeCompetences li[data-id="${id}"]');
    if (elementListe) {
        elementListe.remove();
    }

    const elementCV = document.querySelector('#cvCompetences li[data-id="${id}"]');
    if (elementCV) {
        elementCV.remove();
    }

    // Mettre à jour le CV et le local storage
    updateCV({ target: {} });
};

// Fonction pour ajouter une référence
window.ajouterReference = function () {
    console.log('Ajouter une référence'); // Debug

    const nom = document.getElementById("NomR").value;
    const poste = document.getElementById("posteR").value;
    const contact = document.getElementById("conctactR").value;

    if (nom.trim() !== "" && poste.trim() !== "" && contact.trim() !== "") {
        const id = Date.now().toString();

        const li = document.createElement("li");
        li.className = "list-group-item";
        li.dataset.id = id;
        li.innerHTML = `
            <div class="reference-item">
                <span class="reference-nom">${nom}</span>
                <div class="reference-poste">${poste}</div>
                <div class="reference-contact">${contact}</div>
            </div>
            <button class="btn btn-danger btn-sm float-end" onclick="supprimerReference('${id}')">❌</button>
        `;

        listeReferences.appendChild(li);

        const liSansBouton = li.cloneNode(true);
        liSansBouton.querySelector("button").remove();
        liSansBouton.dataset.id = id;
        cvReferences.appendChild(liSansBouton);

        // Réinitialiser les champs
        document.getElementById("NomR").value = "";
        document.getElementById("posteR").value = "";
        document.getElementById("conctactR").value = "";

        // Mettre à jour le CV et le local storage
        updateCV({ target: {} });
    }
};

// Fonction pour supprimer une référence
window.supprimerReference = function (id) {
    console.log('Supprimer une référence :', id); // Debug

    const elementListe = document.querySelector('#listeReferences li[data-id="${id}"]');
    if (elementListe) {
        elementListe.remove();
    }

    const elementCV = document.querySelector('#cvReferences li[data-id="${id}"]');
    if (elementCV) {
        elementCV.remove();
    }

    // Mettre à jour le CV et le local storage
    updateCV({ target: {} });
};
// Mettre à jour les références dans le CV
const cvReferences = document.getElementById('cvReferences');
if (cvReferences) {
    cvReferences.innerHTML = formData.references.map(reference => `
        <li class="list-group-item">
            <div class="reference-item">
                <span class="reference-nom">${reference.nom}</span>
                <div class="reference-poste">${reference.poste}</div>
                <div class="reference-contact">${reference.contact}</div>
            </div>
        </li>
    `).join('');
}

// Fonction pour ajouter une expérience professionnelle
window.ajouterExperience = function () {
    console.log('Ajouter une expérience professionnelle'); // Debug

    const nomEntreprise = document.getElementById("Nentreprise").value;
    const posteOccupe = document.getElementById("posteocc").value;
    const dateDebut = document.getElementById("datedebut").value;
    const dateFin = document.getElementById("datefin").value;
    const mission = document.getElementById("mission").value;

    if (nomEntreprise.trim() !== "" && posteOccupe.trim() !== "" && dateDebut && dateFin) {
        const id = Date.now().toString();

        const li = document.createElement("li");
        li.className = "list-group-item";
        li.dataset.id = id;
        li.innerHTML = `
            <div class="experience-item">
                <span class="experience-entreprise">${nomEntreprise}</span>
                <div class="experience-poste">${posteOccupe}</div>
                <div class="experience-date">${dateDebut} - ${dateFin}</div>
                <div class="experience-mission">${mission}</div>
            </div>
            <button class="btn btn-danger btn-sm float-end" onclick="supprimerExperience('${id}')">❌</button>
        `;

        listeExperiences.appendChild(li);
        const cvExperiences = document.getElementById("cvExperiences")
        const liSansBouton = li.cloneNode(true);
        liSansBouton.querySelector("button").remove();
        liSansBouton.dataset.id = id;
        cvExperiences.appendChild(liSansBouton);

        // Mettre à jour le CV et le local storage
        updateCV({ target: {} });
    }
};

// Fonction pour supprimer une expérience professionnelle
window.supprimerExperience = function (id) {
    console.log('Supprimer une expérience professionnelle :', id); // Debug

    const elementListe = document.querySelector('#listeExperiences li[data-id="${id}"]');
    if (elementListe) {
        elementListe.remove();
    }

    const elementCV = document.querySelector('#cvExperiences li[data-id="${id}"]');
    if (elementCV) {
        elementCV.remove();
    }

    // Mettre à jour le CV et le local storage
    updateCV({ target: {} });
};
// Fonction pour ajouter une langue
window.ajouterLangue = function () {
    console.log('Ajouter une langue'); // Debug

    const langue = document.getElementById("langue").value;
    const niveau = document.getElementById("niveauLangue").value;

    if (langue.trim() !== "") {
        const id = Date.now().toString();

        const li = document.createElement("li");
        li.className = "list-group-item";
        li.dataset.id = id;
        li.innerHTML = `
            <div class="langue-item">
                <span class="langue-nom">${langue}</span>
                <div class="langue-niveau">Niveau: ${niveau}%</div>
            </div>
            <button class="btn btn-danger btn-sm float-end" onclick="supprimerLangue('${id}')">❌</button>
        `;

        listeLangues.appendChild(li);

        const liSansBouton = li.cloneNode(true);
        liSansBouton.querySelector("button").remove();
        liSansBouton.dataset.id = id;
        cvLangues.appendChild(liSansBouton);

        document.getElementById("langue").value = "";

        // Mettre à jour le CV et le local storage
        updateCV({ target: {} });
    }
};

// Fonction pour supprimer une langue
window.supprimerLangue = function (id) {
    console.log('Supprimer une langue :', id); // Debug

    const elementListe = document.querySelector('#listeLangues li[data-id="${id}"]');
    if (elementListe) {
        elementListe.remove();
    }

    const elementCV = document.querySelector('#cvLangues li[data-id="${id}]');
    if (elementCV) {
        elementCV.remove();
    }

    // Mettre à jour le CV et le local storage
    updateCV({ target: {} });
};

// Fonction pour imprimer le CV
function imprimer() {
    const content = document.getElementById("cvOutput").innerHTML;
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Impression du CV</title></head><body>');
    printWindow.document.write(content);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}
