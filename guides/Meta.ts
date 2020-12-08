/**
 * Audiences that a guide could be targeted at.
 */
export type Audience = 'all' | 'student' | 'staff' | 'unit-chair' | 'developer';

/**
 * FrontMatter expected on each guide.
 */
export type RawGuideFrontMatter = {
  title: string;
  summary: string;
  authors: string;
};

/**
 * `RawGuideFrontMatter` parsed via `parseFrontMatter`.
 */
export type ParsedGuideFrontMatter = {
  title: string;
  summary: string;
  authors: string[];
};

/**
 * Converts the specified `RawGuideFrontMatter` `raw` to `ParsedGuideFrontMatter`.
 */
export const parseFrontMatter = (raw: RawGuideFrontMatter): ParsedGuideFrontMatter => {
  return {
    ...raw,
    authors: raw.authors.split(',').map((a) => a.trim()),
  };
};

type Metadata = {
  /**
   * Map of GitHub usernames of post authors to their corresponding full names.
   */
  authorNames: { [name: string]: string };

  /**
   * Singular & plural labels, and summaries for each audience.
   */
  audienceLabels: {
    [audience in Audience]: {
      singular: string;
      plural: string;
      summary: string | null;
    };
  };

  /**
   * The order in which audiences appear on the guides page.
   */
  orderedAudiences: Audience[];

  /**
   * The order in which guides appear on the guides page.
   */
  orderedGuides: string[];
};

export default {
  authorNames: {
    macite: 'Andrew Cain',
    jakerenzella: 'Jake Renzella',
    'C-Blenco': 'Conor Blencowe',
    MattK18: 'Matthew Kramersh',
  },

  audienceLabels: {
    all: {
      singular: 'All',
      plural: 'All',
      summary: null,
    },
    student: {
      singular: 'Student',
      plural: 'Students',
      summary:
        'Aimed at the learners who will be using Doubtfire to help guide their learning, with the aid of the teaching staff',
    },
    staff: {
      singular: 'Staff',
      plural: 'Staff',
      summary:
        'Aimed at the academics, teachers, and tutors who will be using Doubtfire to help keep students on track',
    },
    'unit-chair': {
      singular: 'Unit Chair',
      plural: 'Unit Chairs',
      summary: null,
    },
    developer: {
      singular: 'Developer',
      plural: 'Developers',
      summary: null,
    },
  },

  orderedAudiences: ['all', 'student', 'staff', 'unit-chair', 'developer'],

  orderedGuides: [
    // all
    'glossary',

    // student
    'customize-your-profile',
    'change-target-grade',

    // staff
    'mark-tasks',
    'grade-portfolios',
    'create-manage-tasks',
    'create-manage-users',
    'enrol-manage-students',
    'create-manage-student-groups',
    'assign-teacher-to-tutorial',
    'unit-statistics',
    'view-class-information',

    // unit-chair
    'create-manage-units',

    // developer
    'overview',
    'installation-windows',
    'installation-mac',
  ],
} as Metadata;
