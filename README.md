# SMART Cancer Navigator – Production Release
## About
SMART Cancer Navigator securely links patient-specific data from EHRs and genomics laboratories to multiple knowledge bases for interpretation and validation.

## Deploying to Production
1. ```ng build --prod``` while in your cloned local [development](https://github.com/smart-cancer-navigator/Application) repository.
2. ```cd``` to the directory containing your local [production](https://github.com/smart-cancer-navigator/smart-cancer-navigator.io) repository
3. Clear the contents of the ```production``` directory (e.g. ```rm -rf /path/to/production/*```)
3. ```cp``` the contents of ```development/dist/``` (the directory that was created/updated following ```ng build```) to the ```production``` directory
3. Track any new files (i.e., ```git add```) and push your commits up to ```master```. Your production instance should reflect any changes within a few minutes.

**Note:** [SMART Cancer Navigator](https://smart-cancer-navigator.github.io) may take some time to reflect the newly pushed commits. Please be patient when pushing commits to the production release.
