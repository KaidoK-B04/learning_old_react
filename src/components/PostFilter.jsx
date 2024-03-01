import React from 'react';
import MySelect from './UI/select/MySelect';
import MyInput from './UI/input/MyInput';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
        <MyInput
          value={filter.query}
          onChange={(e) => setFilter({...filter, query: e.target.value})}
          placeholder="Search..."
        />
        <MySelect
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          defaultValue="sorting"
          options={[
            { value: "title", name: "Titles" },
            { value: "body", name: "Descriptions" },
          ]}
        />
      </div>
    );
};

export default PostFilter;