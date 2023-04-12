import type { StoryObj } from '@storybook/react';
import Banner from './';

type Story = StoryObj<typeof Banner>;

const addDaysToDate = (numDays: number, date: Date) => {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + numDays);
  return date;
};

// Create mock start and end dates as Banner Component renders
// only if end date is on or after today's date
const startDate = new Date();
const endDate = addDaysToDate(3, startDate);

export const WithText: Story = {
  args: {
    bannersIndex: {
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      text: 'Banner Text',
      link: 'https://nodejs.org/en/',
    },
  },
};

export const WithHTML: Story = {
  args: {
    bannersIndex: {
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      html: '<p>Banner HTML</p>',
      link: 'https://nodejs.org/en/',
    },
  },
};

export default {
  title: 'Banner',
  component: Banner,
};