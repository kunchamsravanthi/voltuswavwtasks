// creating Queue 
const Queue = require('bee-queue');
const addQueue = new Queue('addition');

    // const subQueue = new Queue('subtraction', {
    //     redis: {
    //         host: 'somewhereElse'
    //     },
    //     isWorker: false
    // });
//Creating Jobs
const job = addQueue.createJob({x: 2, y: 3}).save();
job.on('progress', (progress) => {
  console.log(`Job ${job.id} reported progress: page ${progress.page} / ${progress.totalPages}`);
});

addQueue.process(async (job) => {
  // do some work
  job.reportProgress({ page: 3, totalPages: 11 });
  // do more work
  job.reportProgress({ page: 9, totalPages: 11 });
  // do the rest
});

                // const job = addQueue.createJob({x: 2, y: 3});
                // job
                // .timeout(3000)
                // .retries(2)
                // .save()
                // .then((job) => {
                //     // job enqueued, job.id populated
                // });
  //Processing Jobs
  addQueue.process(async (job) => {
  console.log(`Processing job ${job.id}`);
  return job.data.x + job.data.y;
});
//Progress Reporting
