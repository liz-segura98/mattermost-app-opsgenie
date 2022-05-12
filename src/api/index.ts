import express, {Router} from 'express';
import {Routes} from '../constant';
import * as cManifest from './manifest';
import * as cBindings from './bindings';
import * as cInstall from './install';
import * as cHelp from './help';
import * as cIncident from './alert';

const router: Router = express.Router();

router.get(Routes.App.ManifestPath, cManifest.getManifest);
router.post(Routes.App.BindingsPath, cBindings.getBindings);
router.post(Routes.App.InstallPath, cInstall.getInstall);

router.post(`${Routes.App.BindingPathHelp}/submit`, cHelp.getHelp);

router.post(`${Routes.App.CallPathAlertCreate}/submit`, cIncident.createAlert);

const staticRouter = express.Router();
staticRouter.use(express.static('static'));
router.use('/static', staticRouter);

export default router;
