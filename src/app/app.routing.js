import { RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dash.component";
const appRoutes = [
    {
        path: "",
        component: DashboardComponent
        // pathMatch: "full"
    },
];
export const routing = RouterModule.forRoot(appRoutes, {
    useHash: true
});
export const appRoutingProviders = [];
//# sourceMappingURL=app.routing.js.map