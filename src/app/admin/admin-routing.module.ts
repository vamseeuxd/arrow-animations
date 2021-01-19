import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AdminPage} from './admin.page';

const routes: Routes = [
    {
        path: '',
        component: AdminPage,
        children: [
            {
                path: '',
                redirectTo: '/admin/dashboard',
                pathMatch: 'full',
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardPageModule)
            },
            {
                path: 'technologies',
                loadChildren: () => import('./pages/technologies/technologies.module').then(m => m.TechnologiesPageModule)
            },
            {
                path: 'batches',
                loadChildren: () => import('./pages/batches/batches.module').then(m => m.BatchesPageModule)
            },
            {
                path: 'topics/:technologyId',
                loadChildren: () => import('./pages/topics/topics.module').then(m => m.TopicsPageModule)
            },
            {
                path: 'students',
                loadChildren: () => import('./pages/students/students.module').then(m => m.StudentsPageModule)
            },
            {
                path: 'faculties',
                loadChildren: () => import('./pages/faculties/faculties.module').then(m => m.FacultiesPageModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminPageRoutingModule {
}
