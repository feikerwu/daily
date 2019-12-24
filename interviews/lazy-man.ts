/**
 * 实现一个LazyMan，可以按照以下方式调用:
 * LazyMan(“Hank”)输出:
 * Hi! This is Hank!

 * LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
 * Hi! This is Hank!
 * //等待10秒..
 * Wake up after 10
 * Eat dinner~
 *
 * LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
 * Hi This is Hank!
 * Eat dinner~
 * Eat supper~
 * LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出
 * //等待5秒
 * Wake up after 5
 * Hi This is Hank!
 * Eat supper
 * 以此类推。
 */

type Task = () => void;

class LazyMan {
  private tasks: Task[];
  private point: number;

  constructor(name: string) {
    this.tasks = [];
    this.point = 0;

    this.tasks.push(() => {
      console.log(`hi, this is ${name}`);
      this.next();
    });

    setTimeout(() => {
      this.next();
    }, 0);
  }

  eat(whichToEat: string): LazyMan {
    this.tasks.push(() => {
      console.log(`eat ${whichToEat}`);
      this.next();
    });
    return this;
  }

  sleep(time: string | number): LazyMan {
    this.tasks.push(() => {
      setTimeout(() => {
        console.log(`wake up after ${time}s`);
        this.next();
      }, +time * 1000);
    });
    return this;
  }

  sleepFirst(time: string | number): LazyMan {
    this.tasks.unshift(() => {
      setTimeout(() => {
        console.log(`wake up after ${time}s`);
        this.next();
      }, +time * 1000);
    });
    return this;
  }

  /* 通过指针控制调度 */
  next() {
    const { tasks, point } = this;
    if (point < tasks.length) {
      const curTask = tasks[point];
      this.point = point + 1;
      curTask();
    }
  }
}

let a = new LazyMan("a");
a.sleepFirst(5).eat("dinner");
