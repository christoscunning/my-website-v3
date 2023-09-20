# Personal Website v3

Recreation of old christoscunning.com, but now new and improved with React.


Run development server:
    npm run dev


Manual deployment steps:

1. Build website
    npm run build
2. Preview build to ensure everything works properly
    npm run preview
3. Copy dist folder to ubuntu server
    Can easily be done with FileZilla
    

Automatic Deployment Notes:

1. Create github action to run on pushes to main
2. Load repo into runner
3. Build website using npm run build command
4. Use rsync to transfer files to ubuntu server over ssh. Example: (add -n for dry run)  
    rsync -av -e 'ssh -p 2634' ./rsync-test/ christos@christoscunning.com:~/rsync-test
5. That is pretty much it... just need to setup ssh key pair for github runner
