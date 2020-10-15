import { VolunteeringComponent } from './../volunteering/volunteering.component';
import { AcademicProjectComponent } from './../academic-project/academic-project.component';
import { ProfessionalExperienceComponent } from './../professional-experience/professional-experience.component';
import { EducationComponent } from './../education/education.component';
import { SkillsComponent } from './../skills/skills.component';
import { AboutComponent } from './../about/about.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './../home/home.component';
export const routes: Routes = [
    { path: 'home',  component: HomeComponent },
    { path: 'about',  component: AboutComponent },
    { path: 'skills',  component: SkillsComponent },
    { path: 'education',  component: EducationComponent },
    { path: 'experience',  component: ProfessionalExperienceComponent },
    { path: 'projects',  component: AcademicProjectComponent },
    { path: 'volunteering',  component: VolunteeringComponent },

    { path: '', redirectTo: '/home', pathMatch: 'full' }
    
]