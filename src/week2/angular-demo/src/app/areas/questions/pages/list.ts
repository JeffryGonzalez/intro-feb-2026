import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-questions-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <ul class="flex flex-col gap-4">
      @for (q of questions(); track q.id) {
        <li class="card bg-base-200 card-xl shadow-sm">
          <div class="card-body">
            <h2 class="card-title">{{ q.title }}</h2>
            <p>{{ q.content }}</p>
            <div class="justify-end card-actions">
              <button class="btn btn-primary">I Have an Answer!</button>
            </div>
          </div>
          @if (q.submittedAnswers) {
            <ul class="flex flex-col gap-2 p-8">
              @for (a of q.submittedAnswers; track a.id) {
                <li class="card bg-base-100 card-lg shadow-sm p-4 m-8">
                  <p>
                    You have to update one version at a time, using <code>ng update</code>, so you
                    will have to do that three times
                  </p>
                </li>
              }
            </ul>
          }
        </li>
      }
    </ul>
  `,
  styles: ``,
})
export class List {
  questions = signal([
    {
      id: '1',
      title: 'Upgrading My Angular App??',
      content: "I have an Angular 17 app, and I want to upgrade to Angular 20. What's the process.",
    },
    {
      id: '2',
      title: 'Angular vs React',
      content: 'Which one is better for building web applications?',
      submittedAnswers: [
        {
          id: 'a1',
          content:
            'Angular is better for large-scale applications, while React is more flexible for smaller projects.',
        },
        {
          id: 'a2',
          content: 'React has a larger community and more third-party libraries available.',
        },
      ],
    },
  ]);
}
