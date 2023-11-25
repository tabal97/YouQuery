import { spawn } from 'child_process';

export const executePython = async (script, url) => {
    const py = spawn('python', [script, url]);

    const result = await new Promise((resolve, reject) => {
        let output;

        py.stdout.on('data', (data) => {
            output = data.toString();
        });

        py.on('exit', (code) => {
            console.log(`Child process exited with code ${ code }`);
            resolve(output);
        });
    });

    return result;
}