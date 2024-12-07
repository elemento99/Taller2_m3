
console.log("js funcionando")

document.addEventListener("DOMContentLoaded", () => {
    
    const doctors = [
        { name: "Dr. Juan Pérez", specialty: "Cardiología", experience: 10, profile: "Experto en enfermedades del corazón." },
        { name: "Dr. Ana Gómez", specialty: "Neurología", experience: 8, profile: "Especialista en trastornos neurológicos." },
        { name: "Dr. Carlos López", specialty: "Pediatría", experience: 6, profile: "Enfoque en la salud infantil." },
        { name: "Dr. María Rodríguez", specialty: "Oncología", experience: 7, profile: "En tratamientos de cáncer y cuidados paliativos." },
        { name: "Dr. Sofía Martínez", specialty: "Cardiología", experience: 12, profile: "Amplia experiencia en cirugía cardiovascular." },
        { name: "Dr. Pedro García", specialty: "Neurología", experience: 4, profile: "Especialista en neuropsiquiatría." },
        { name: "Dra. Laura Fernández", specialty: "Pediatría", experience: 15, profile: "Médico pediatra con gran trayectoria." },
        { name: "Dr. Miguel Torres", specialty: "Oncología", experience: 3, profile: "Investigador en tratamientos oncológicos." },
        { name: "Dra. Elena Castro", specialty: "Cardiología", experience: 9, profile: "Experta en rehabilitación cardíaca." },
        { name: "Dr. Luis Díaz", specialty: "Neurología", experience: 11, profile: "Pionero en técnicas avanzadas de neurocirugía." },
    ];


    const renderDoctors = (filter = {}) => {
        const teamSection = document.querySelector(".team__members");
        teamSection.innerHTML = ""; 

        doctors.forEach(doctor => {
   
            if (
                (filter.specialties && !filter.specialties.includes(doctor.specialty)) ||
                (filter.experience && doctor.experience <= filter.experience)
            ) return;

         
            const doctorCard = `
                <article class="team__member" data-specialty="${doctor.specialty}" data-experience="${doctor.experience}">
                    <div class="card">
                        <img class="card-img-top team__photo" src="https://picsum.photos/seed/${doctor.name}/100" alt="Foto de ${doctor.name}">
                        <div class="card-body">
                            <h3 class="team__name card-title">${doctor.name}</h3>
                            <p class="team__specialty card-text">Especialidad: ${doctor.specialty}</p>
                            <p class="team__profile card-text">Perfil: ${doctor.profile}</p>
                            <p class="team__experience card-text">Años de experiencia: ${doctor.experience}</p>
                        </div>
                    </div>
                </article>
            `;
            teamSection.innerHTML += doctorCard;
        });
    };

    const applyFilters = () => {
        const selectedSpecialties = Array.from(document.querySelectorAll(".filter-specialty:checked")).map(el => el.value);
        const filterYears = document.querySelector(".filter-years:checked") ? 5 : null;

        renderDoctors({ specialties: selectedSpecialties, experience: filterYears });
    };

    // Listeners para los filtros
    document.querySelectorAll(".filters input").forEach(input => {
        input.addEventListener("change", applyFilters);
    });


    renderDoctors();
});
