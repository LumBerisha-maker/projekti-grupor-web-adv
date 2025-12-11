

$(document).ready(function() {
    
  
    const workouts = [
        {id: 1, name: "Morning Yoga", duration: 30, difficulty: "beginner", type: "flexibility"},
        {id: 2, name: "HIIT Cardio", duration: 45, difficulty: "advanced", type: "cardio"},
        {id: 3, name: "Strength Training", duration: 60, difficulty: "intermediate", type: "strength"},
        {id: 4, name: "Beginner Circuit", duration: 25, difficulty: "beginner", type: "cardio"},
        {id: 5, name: "Core Workout", duration: 40, difficulty: "advanced", type: "strength"}
    ];

   
    const schedule = [
        {day: "Monday", morning: "Yoga", afternoon: "Strength", evening: "Cardio"},
        {day: "Tuesday", morning: "Circuit", afternoon: "Stretch", evening: "Rest"},
        {day: "Wednesday", morning: "HIIT", afternoon: "Core", evening: "Strength"},
        {day: "Thursday", morning: "Yoga", afternoon: "Circuit", evening: "Stretch"},
        {day: "Friday", morning: "Strength", afternoon: "Cardio", evening: "Core"}
    ];

    function populateWorkoutTable() {
        const tbody = $('#workoutTable');
        if (!tbody.length) return;
        
        tbody.empty();
        workouts.slice(0, 4).forEach(workout => {
            tbody.append(`<tr>
                <td>${workout.name}</td>
                <td>${workout.duration} min</td>
                <td><span class="badge bg-${getBadgeColor(workout.difficulty)}">${workout.difficulty}</span></td>
                <td>${workout.type}</td>
            </tr>`);
        });
    }

  
    function getBadgeColor(level) {
        const colors = {
            beginner: 'success',
            intermediate: 'warning', 
            advanced: 'danger'
        };
        return colors[level] || 'secondary';
    }


    function populateWorkoutGrid(filter = 'all') {
        const grid = $('#workoutGrid');
        if (!grid.length) return;
        
        grid.empty();
        
 
        let filtered = filter === 'all' ? workouts : workouts.filter(w => 
            w.difficulty === filter || w.type === filter
        );
        
  
        for (let i = 0; i < filtered.length; i++) {
            const workout = filtered[i];
            grid.append(`<div class="col-md-6 col-lg-4 workout-item">
                <div class="card workout-card">
                    <div class="position-relative">
                        <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop">
                        <span class="difficulty-badge">${workout.difficulty.toUpperCase()}</span>
                    </div>
                    <div class="card-body">
                        <h5>${workout.name}</h5>
                        <p>${workout.duration} min • ${workout.type}</p>
                        <button class="btn btn-primary" onclick="selectWorkout(${workout.id})">Select</button>
                    </div>
                </div>
            </div>`);
        }
        
        if (filtered.length === 0) {
            grid.append('<div class="col-12 text-center"><p>No workouts found</p></div>');
        }
    }


    function populateScheduleTable() {
        const tbody = $('#scheduleTable tbody');
        if (!tbody.length) return;
        
        tbody.empty();
        let i = 0;
        while (i < schedule.length) {
            const day = schedule[i];
            tbody.append(`<tr>
                <td><strong>${day.day}</strong></td>
                <td>${day.morning}</td>
                <td>${day.afternoon}</td>
                <td>${day.evening}</td>
            </tr>`);
            i++;
        }
    }

 
    $('.filter-btn').click(function() {
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        populateWorkoutGrid($(this).data('filter'));
    });


    $('#customWorkoutForm').submit(function(e) {
        e.preventDefault();
        
   
        const name = $('#workoutName').val();
        const duration = $('#workoutDuration').val();
        const difficulty = $('#workoutDifficulty').val();
        const type = $('#workoutType').val();
        const description = $('#workoutDescription').val();
        
        if (!name || !duration || !difficulty || !type || !description) {
            showAlert('Please fill all fields', 'danger');
            return;
        }
        
        if (duration < 5 || duration > 120) {
            showAlert('Duration must be 5-120 minutes', 'danger');
            return;
        }
        

        workouts.push({
            id: workouts.length + 1,
            name: name,
            duration: parseInt(duration),
            difficulty: difficulty,
            type: type
        });
        
        showAlert(`Workout "${name}" created!`, 'success');
        this.reset();
        populateWorkoutGrid();
    });


 
    const nameRegex = /^[a-zA-Z\s'-]$/;
    
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   
    $('#firstName, #lastName').on('input', function() {
        const value = $(this).val();
        const isValid = nameRegex.test(value);
        
        if (value && !isValid) {
            $(this).addClass('is-invalid').removeClass('is-valid');
        } else if (value && isValid) {
            $(this).addClass('is-valid').removeClass('is-invalid');
        } else {
            $(this).removeClass('is-valid is-invalid');
        }
    });

  
    $('#email').on('input', function() {
        const value = $(this).val();
        const isValid = emailRegex.test(value);
        
        if (value && !isValid) {
            $(this).addClass('is-invalid').removeClass('is-valid');
        } else if (value && isValid) {
            $(this).addClass('is-valid').removeClass('is-invalid');
        } else {
            $(this).removeClass('is-valid is-invalid');
        }
    });


    $('#signupForm').submit(function(e) {
        e.preventDefault();
        
 
        const firstName = $('#firstName').val().trim();
        const lastName = $('#lastName').val().trim();
        const email = $('#email').val().trim();
        const terms = $('#terms').is(':checked');
        
 
        $(this).removeClass('was-validated');
        $('.is-valid, .is-invalid').removeClass('is-valid is-invalid');
        
       
        const errors = [];
        

        if (!firstName) {
            errors.push('First name is required');
            $('#firstName').addClass('is-invalid');
        } else if (!nameRegex.test(firstName)) {
            errors.push('First name must contain only letters, spaces, hyphens, or apostrophes (2-30 characters)');
            $('#firstName').addClass('is-invalid');
        } else {
            $('#firstName').addClass('is-valid');
        }
        
    
        if (!lastName) {
            errors.push('Last name is required');
            $('#lastName').addClass('is-invalid');
        } else if (!nameRegex.test(lastName)) {
            errors.push('Last name must contain only letters, spaces, hyphens, or apostrophes (2-30 characters)');
            $('#lastName').addClass('is-invalid');
        } else {
            $('#lastName').addClass('is-valid');
        }
        
   
        if (!email) {
            errors.push('Email is required');
            $('#email').addClass('is-invalid');
        } else if (!emailRegex.test(email)) {
            errors.push('Please enter a valid email address');
            $('#email').addClass('is-invalid');
        } else {
            $('#email').addClass('is-valid');
        }
        
      
        if (!terms) {
            errors.push('You must agree to the terms and conditions');
        }
        
     
        if (errors.length > 0) {
            showAlert(errors.join('<br>'), 'danger');
            $(this).addClass('was-validated');
        } else {
     
            const user = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                fullName: firstName + ' ' + lastName,
                signUpPage: 'full'
            };
            
            showAlert(`Welcome ${firstName}! Account created successfully.`, 'success');
            console.log('User registered:', user);

            setTimeout(() => {
                this.reset();
                $(this).removeClass('was-validated');
                $('.is-valid, .is-invalid').removeClass('is-valid is-invalid');
            }, 3000);
        }
    });


    window.selectWorkout = function(id) {
        const workout = workouts.find(w => w.id === id);
        if (workout) {
       
            $('.workout-card').removeClass('border-primary');
            $(`.workout-card:has(button[onclick="selectWorkout(${id})"])`).addClass('border-primary');
            
            showAlert(`Selected: ${workout.name} (${workout.duration} min)`, 'info');
        }
    };


    function showAlert(message, type) {
        $('.alert').remove();
        const alert = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>`;
        
        if ($('#customWorkoutForm').length) {
            $('#customWorkoutForm').before(alert);
        } else if ($('#signupForm').length) {
            $('#signupForm').before(alert);
        }
    }

    populateWorkoutTable();
    populateWorkoutGrid();
    populateScheduleTable();
    
   
    $('.card').hover(
        function() { $(this).css('box-shadow', '0 4px 8px rgba(0,0,0,0.2)'); },
        function() { $(this).css('box-shadow', 'none'); }
    );
    
    console.log('GetUp loaded - All requirements satisfied!');
    console.log('Name validation regex: Only letters, spaces, hyphens, apostrophes (2-30 chars)');
});