import { RouterModule } from '@angular/router';
import { PresentacioPageContainer } from '../presentacio/containers/presentacio-page/presentacio-page.container';
import { ProjectesPageContainer } from '../projectes/containers/projectes-page/projectes-page.container';
import { FinancesPageContainer } from '../finances/containers/finances-page/finances-page.container';
import { ColaboradorsPageContainer } from '../colaboradors/containers/colaboradors-page/colaboradors-page.container';
import { AgraimentsPageContainer } from '../agraiments/containers/agraiments-page/agraiments-page.container';
import { FesteamicPageContainer } from '../festeamic/containers/festeamic-page/festeamic-page.container';
import { ContactePageContainer } from '../contacte/containers/contacte-page/contacte-page.container';

export const routes = [
    { path: '', redirectTo: '/presentacio', pathMatch: 'full' },
    { path: 'presentacio', component: PresentacioPageContainer },
    { path: 'projectes', component: ProjectesPageContainer },
    { path: 'finances', component: FinancesPageContainer },
    { path: 'festeamic', component: FesteamicPageContainer },
    { path: 'colaboradors', component: ColaboradorsPageContainer },
    { path: 'agraiments', component: AgraimentsPageContainer },
    { path: 'contacte', component: ContactePageContainer }
];
export const routing = RouterModule.forRoot(routes);
