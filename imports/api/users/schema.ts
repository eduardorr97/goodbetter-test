import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Meteor } from 'meteor/meteor';
import { FilesCollection } from 'meteor/ostrio:files';

SimpleSchema.extendOptions(['autoform']);

SimpleSchema.setDefaultMessages({
  initialLanguage: 'en',
  messages: {
    en: {
      uploadError: '{{value}}', //File-upload
    },
  },
});

const Images = new FilesCollection({
  collectionName: 'Images',
  allowClientCode: true, // Required to let you remove uploaded file
  onBeforeUpload(file) {
    // Allow upload files under 10MB, and only in png/jpg/jpeg formats
    if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.ext)) {
      return true;
    }
    return 'Please upload image, with size equal or less than 10MB';
  },
});

if (Meteor.isClient) {
  Meteor.subscribe('files.images.all');
}

if (Meteor.isServer) {
  Meteor.publish('files.images.all', () => {
    return Images.collection.find({});
  });
}

export const userSchema = new SimpleSchema({
  _id: {
    type: String,
    optional: true,
  },
  username: {
    type: String,
  },
  birth: {
    type: String,
  },
  gender: {
    type: String,
  },
  createdAt: {
    type: Date,
    optional: true,
    defaultValue: new Date(),
  },
  //@ts-ignore
  picture: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images',
        uploadTemplate: 'uploadField', // <- Optional
        previewTemplate: 'uploadPreview', // <- Optional
        insertConfig: {
          // <- Optional, .insert() method options, see: https://github.com/VeliovGroup/Meteor-Files/wiki/Insert-(Upload)
          meta: {},
          isBase64: false,
          transport: 'ddp',
          streams: 'dynamic',
          chunkSize: 'dynamic',
          allowWebWorkers: true,
        },
      },
    },
  },
});

export interface userType {
  _id?: string;
  username: string;
  birth: string;
  gender: string;
  createdAt?: Date;
  picture: string;
}

export const userSchemaBridge = new SimpleSchema2Bridge(userSchema);
