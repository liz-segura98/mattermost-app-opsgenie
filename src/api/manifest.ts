import {Request, Response} from 'express';
import config from '../config';
import {Manifest} from '../types';
import manifest from '../manifest.json';

export function getManifest(request: Request, res: Response): void {
    const m: Manifest = manifest;

    m.http.root_url = `${config.APP.HOST}:${config.APP.PORT}`;

    res.json(m);
}
